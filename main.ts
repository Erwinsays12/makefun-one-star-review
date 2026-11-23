// One-Star Review of Something Essential
//
// A small deterministic program that writes a single deadpan one-star
// review of an everyday essential to /output/entry.txt.
//
// The review: gravity. Everyone relies on it, nobody can fix it, and its
// daily grievance is the most ordinary one there is: it drops things.
// The complaint is filed in earnest, the deadpan holds all the way
// through, and the sting lands in the last four words, when the complaint
// itself suffers exactly the fate it was filed about.
//
// The program validates the text against the competition gate before it
// writes anything: 1 to 160 characters, a single line, not only
// whitespace, and no exclamation mark doing the work for the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review, exactly as it will be judged. One line, no trailing
// newline: the gate counts every character in the file.
const REVIEW =
  "Gravity has dropped everything I own at least once and never apologised. One star. I filed a complaint. It fell on the floor.";

// The competition gate, checked here before anything is written.
const MAX_CHARS = 160;

function countChars(text: string): number {
  // Count Unicode code points, not UTF-16 code units.
  return [...text].length;
}

function validate(text: string): string[] {
  const problems: string[] = [];
  const chars = countChars(text);
  if (chars < 1 || chars > MAX_CHARS) {
    problems.push(`length ${chars} is outside 1-${MAX_CHARS} characters`);
  }
  if (text.trim().length === 0) {
    problems.push("text is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("text is not a single line");
  }
  if (text.includes("!")) {
    problems.push("an exclamation mark is doing the joke's work");
  }
  return problems;
}

function main(): void {
  const problems = validate(REVIEW);
  if (problems.length > 0) {
    for (const problem of problems) {
      console.error(`invalid review: ${problem}`);
    }
    process.exit(1);
  }

  // The grader runs the program in a sandbox with /output mounted.
  // ENTRY_OUTPUT_DIR exists only so the entry can be tested locally.
  const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, REVIEW, "utf8");

  console.log(`wrote ${outputPath} (${countChars(REVIEW)} characters)`);
  console.log(REVIEW);
}

main();
