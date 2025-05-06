import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import typescriptParser from '@typescript-eslint/parser';
import nextjsConfig from '@repo/eslint-config/nextjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');
const tsConfigEsLintPath = path.resolve(__dirname, 'tsconfig.eslint.json');

const config = [
  ...nextjsConfig,
  includeIgnoreFile(gitignorePath),
  { ignores: ['**/*.generated.*'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: { project: 'tsconfig.eslint.json', tsconfigRootDir: __dirname },
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: tsConfigEsLintPath,
        },
      },
    },
  },
];

export default config;
