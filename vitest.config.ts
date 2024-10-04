import path from 'path';
import { defaultExclude, defineConfig } from 'vitest/config';

const coverageExclude = [
  ...defaultExclude,
  'commitlint.config.*',
  '.eslintrc.*',
  'reset.d.ts',
  'website',
  'docs',
  'src/**/*.type.ts',
  'src/**/*.spec.ts',
];

export default defineConfig({
  test: {
    coverage: {
      exclude: coverageExclude,
    },
  },
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, './src/features'),
      '@utilities': path.resolve(__dirname, './src/utilities'),
    },
  },
});
