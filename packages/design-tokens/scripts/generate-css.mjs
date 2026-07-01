import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defaultTokens } from '../dist/tokens.js';
import { tokensToCssVariables } from '../dist/css.js';

const distDir = dirname(fileURLToPath(import.meta.url));
const outputPath = join(distDir, '..', 'dist', 'tokens.css');

writeFileSync(outputPath, `${tokensToCssVariables(defaultTokens)}\n`);
