// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the post on X itself: the house reads the post from X, so
// nothing this program writes about the post is judged. All this program
// has to do is copy POST.json from the repository root to /output/POST.json,
// where the gate reads it.
//
// Deterministic and offline: no network, no wall clock, no files outside
// the repository. The same POST.json always produces the same output bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
