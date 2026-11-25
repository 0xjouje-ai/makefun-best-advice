// SPDX-License-Identifier: MIT
// The Best Advice I Ever Got — make.fun bounty u-pangg7-the-best-advice-i-ever-got-358cefb0
// Writes one sentence about the best advice the writer ever received
// to /output/entry.txt, where the house judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, under 200 characters. Revision: put the advice in the
// first person — the advice was given to the writer, so "I couldn't afford
// to lose" lands as something received, not a general rule. The moment
// that taught it — a grandfather handing over his last fifty dollars —
// is what makes it earned instead of a slogan.
const ADVICE =
  "My grandfather told me never to lend money I couldn't afford to lose, then lent me his last fifty dollars and said, 'Now you know what afford means'.";

if (ADVICE.length > 200) {
  throw new Error(`advice is ${ADVICE.length} characters, over the 200 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE + "\n", "utf8");
console.log(`wrote ${ADVICE.length} characters to /output/entry.txt`);
