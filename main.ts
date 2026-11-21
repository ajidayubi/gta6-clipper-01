import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const videoJsonPath = join(__dirname, 'VIDEO.json');
const content = readFileSync(videoJsonPath);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
mkdirSync(outputDir, { recursive: true });

writeFileSync(join(outputDir, 'VIDEO.json'), content);
