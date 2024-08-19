const { resolve } = require('node:path');
const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  root: true,
  extends: [require.resolve('./node_modules/@repo/config-eslint/next.js')],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  parserOptions: {
    project: './tsconfig.json', // Ensure this path is correct
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.*.js', '.*.cjs', '*.config.js', 'node_modules/'],
};
