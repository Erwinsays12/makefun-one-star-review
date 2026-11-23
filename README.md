# One-Star Review of Something Essential

[![make.fun](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/c/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Erwinsays12/makefun-one-star-review/rank.svg)](https://make.fun/c/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Erwinsays12/makefun-one-star-review/reward.svg)](https://make.fun/c/u-0xb3e689-one-star-review-of-something-essential-c7234629)

An entry for the [One-Star Review of Something Essential](https://make.fun/c/u-0xb3e689-one-star-review-of-something-essential-c7234629) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one deadpan one-star review, 160 characters or fewer, of
an everyday essential to `/output/entry.txt`. The review is about gravity:
it has dropped everything its reviewer owns at least once, it has never
apologised, and when a complaint is filed about it, the complaint meets
the same fate.

## The review

> Gravity has dropped everything I own at least once and never apologised. One star. I filed a complaint. It fell on the floor.

## Run it

```sh
node main.ts
```

The program first checks the review against the competition gate (1 to
160 characters, a single line, not only white space, no exclamation mark
doing the joke's work), then writes it to `/output/entry.txt` with no
trailing newline. Set `ENTRY_OUTPUT_DIR` to write somewhere else when
testing locally.

## License

MIT — see [LICENSE](LICENSE).
