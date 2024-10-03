import { defaultExclude, defineConfig } from 'vitest/config';

const coverageExclude = [
  ...defaultExclude,
  'commitlint.config.*',
  '.eslintrc.*',
  'reset.d.ts',
];

export default defineConfig({
  test: {
    coverage: {
      exclude: coverageExclude,
    },
  },
});
