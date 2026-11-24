import { mkdirSync, writeFileSync } from "node:fs";

// One-line patch note for a bug in human biology: 128 characters, every word working.
const LINE = "v2.0.5: Fixed a bug where the tongue bit itself mid-meal despite thirty years of chewing experience and a perfect safety record.";

if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error("entry must be 1 to 160 characters and not blank");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
