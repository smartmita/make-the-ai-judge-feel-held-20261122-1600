import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY_TEXT = [
  'A fieldstone rests in the hollow it pressed into the pasture.',
  'Moss closes the seam between rock and grass.',
  'Late sun warms the top; damp clay cradles the underside.',
  'The earth keeps a cup around it, and the stone gives every pound of its weight away.',
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
