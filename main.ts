// ai-news-image-20261118 — entry program.
//
// Copies the pre-rendered news image (entry.png, in this repository) to the
// output directory as entry.png, byte for byte. Deterministic: no network,
// no timestamps, no randomness — two runs write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const image = readFileSync(join(repoDir, "entry.png"));
writeFileSync(join(outDir, "entry.png"), image);

// Confirm the copy is complete: the output must hold exactly the bytes read.
const written = readFileSync(join(outDir, "entry.png"));
if (written.length !== image.length) {
  throw new Error(
    `entry.png copy incomplete: ${written.length} of ${image.length} bytes`,
  );
}
console.log(`wrote entry.png (${image.length} bytes) to ${outDir}`);
