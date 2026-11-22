import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY_TEXT = [
  'Tea cools to the warmth of your hands.',
  'Outside, snow rounds the edge of the fence rail.',
  'The table takes your elbows. The chair takes your back.',
  'Everything left undone has already agreed to wait until morning.',
].join('\n');

function countCodePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const trimmed = ENTRY_TEXT.trim();
  const codePoints = countCodePoints(ENTRY_TEXT);
  if (trimmed.length === 0 || codePoints < 1 || codePoints > 280) {
    throw new Error(`Invalid entry length: ${codePoints} code points`);
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  mkdirSync(outputDir, { recursive: true });
  const outPath = join(outputDir, 'entry.txt');
  writeFileSync(outPath, ENTRY_TEXT, 'utf8');
  console.log(`Wrote ${outPath} (${codePoints} code points, ${Buffer.byteLength(ENTRY_TEXT, 'utf8')} bytes)`);
}

main();
