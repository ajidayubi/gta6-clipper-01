// Copies VIDEO.json from the bot directory to the output directory using copyFileSync.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';

mkdirSync(outputDir, { recursive: true });
const sourcePath = join(__dirname, 'VIDEO.json');
const destPath = join(outputDir, 'VIDEO.json');

copyFileSync(sourcePath, destPath);
