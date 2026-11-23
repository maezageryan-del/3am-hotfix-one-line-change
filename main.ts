// 3 AM Hotfix: The Funniest Commit Message
// Writes one git commit message — the funniest line a developer would
// actually type after fixing production at 3 AM — to entry.txt.
//
// The line: revert: my 'one-line change' (400 lines) paged me at 3 AM
// 57 characters, one line, ASCII only. The joke is the number: the
// "one-line change" in scare quotes, detonated by the parenthetical
// (400 lines). Revert + pager + 3 AM give it the production detail;
// the whole line stays a terse imperative commit message.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE = "revert: my 'one-line change' (400 lines) paged me at 3 AM";

// Fail loudly rather than emit an invalid entry: the gate needs
// 1–179 characters of UTF-8 text, not only whitespace.
if (MESSAGE.length < 1 || MESSAGE.length > 179 || !MESSAGE.trim()) {
  throw new Error(`entry message fails the gate at ${MESSAGE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
