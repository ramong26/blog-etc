import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react$'], ['^@radix-ui'], ['^@repo'], ['^\\w'], ['^\\.']],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
);
