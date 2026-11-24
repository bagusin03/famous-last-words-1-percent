// Famous Last Words at 1 Percent — make.fun entry.
// One line: a phone's last words as its battery hits 1 percent.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "Confession: I've been at one percent for three days \u2014 I kept dimming my own screen on purpose just to watch you panic.";

// Guard the sealed gate ourselves: one line, 1-199 characters, not blank.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 199 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line violates the 1-199 char single-line gate (${chars} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the entry line");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
