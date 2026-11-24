# The Trolling Phone — Famous Last Words at 1 Percent

[![make.fun](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/bagusin03/famous-last-words-1-percent/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/bagusin03/famous-last-words-1-percent/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

One line, 118 characters — the funniest last words a phone says as its battery hits 1 percent. The twist: the phone was never really dying. It faked 1 percent for three days and dimmed its own screen on purpose, just to watch its owner panic.

`main.ts` writes the single 118-character line to `/output/entry.txt`:

> Confession: I've been at one percent for three days — I kept dimming my own screen on purpose just to watch you panic.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–199 character single-line gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
