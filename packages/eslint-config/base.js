import globals from 'globals';
import eslintJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import { fixupPluginRules } from '@eslint/compat';
import pluginTurbo from 'eslint-plugin-turbo';
import pluginImport from 'eslint-plugin-import';
import pluginVitest from '@vitest/eslint-plugin';
import pluginYouDontNeedLodashUnderscore from 'eslint-plugin-you-dont-need-lodash-underscore';
import pluginPromise from 'eslint-plugin-promise';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
const baseConfig = tseslint.config(
  eslintJs.configs.recommended,
  configPrettier,
  ...tseslint.configs.recommended,
  pluginImport.flatConfigs.recommended,
  {
    ...pluginPromise.configs['flat/recommended'],
    rules: {
      ...pluginPromise.configs['flat/recommended'].rules,
      'promise/always-return': [
        'error',
        {
          ignoreLastCallback: true,
        },
      ],
      'promise/no-return-wrap': 'off',
    },
  },
  {
    plugins: { 'unused-imports': pluginUnusedImports },
    rules: { 'unused-imports/no-unused-imports': 'error' },
  },
  {
    plugins: {
      'you-dont-need-lodash-underscore': fixupPluginRules(pluginYouDontNeedLodashUnderscore),
    },
    rules: {
      ...pluginYouDontNeedLodashUnderscore.configs['all-warn'].rules,
      'you-dont-need-lodash-underscore/get': 'off',
      'you-dont-need-lodash-underscore/is-function': 'off',
      'you-dont-need-lodash-underscore/is-string': 'off',
      'you-dont-need-lodash-underscore/is-undefined': 'off',
      'you-dont-need-lodash-underscore/is-null': 'off',
      'you-dont-need-lodash-underscore/is-nil': 'off',
    },
  },
  {
    plugins: { turbo: pluginTurbo },
  },
  {
    files: ['**/*.spec.{js,jsx,ts,tsx}'],
    plugins: { vitest: pluginVitest },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      'vitest/no-focused-tests': 'error',
      'vitest/no-disabled-tests': 'warn',
    },
  },
  { ignores: ['dist/**', '**/node_modules/'] },
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message: "`React` doesn't need to be imported.",
            },
            {
              name: 'lodash',
              message:
                "Every lodash function must be imported as a default like `import isArray from 'lodash/isArray'`.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      // TODO: reactivate
      // '@typescript-eslint/prefer-nullish-coalescing': 'error',
      // TODO: reactivate
      // '@typescript-eslint/ban-ts-comment': 'error',
      // TODO: deactivate
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'promise/catch-or-return': 'error',
      'promise/param-names': 'error',
    },
  },
  {
    settings: {
      'import/internal-regex': '^@repo/',
      'import/resolver': {
        node: { extensions: ['.ts', '.tsx'] },
        typescript: { alwaysTryTypes: true },
      },
    },
  }
);

export default baseConfig;
