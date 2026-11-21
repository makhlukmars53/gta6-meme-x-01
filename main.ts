// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the post on X itself: the house reads the post from X, so
// nothing this program writes about the post is judged. All this program
// has to do is copy POST.json from the repository root to /output/POST.json,
// where the gate reads it.
//
// Deterministic and offline: no network, no wall clock, no files outside
// the repository. The same POST.json always produces the same output bytes.
// Before copying, the program reads POST.json and checks that its url is a
// real X status link; a broken file or a bad url stops the run instead of
// handing the gate something it cannot use.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(BOT_DIR, "POST.json");
let postUrl;
try {
  const parsed = JSON.parse(readFileSync(sourcePath, "utf8"));
  postUrl = parsed?.url;
} catch (err) {
  console.error(`POST.json could not be read as JSON from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof postUrl !== "string" || !/^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/.test(postUrl)) {
  console.error("POST.json url must be an X status link like https://x.com/<handle>/status/<digits>");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
