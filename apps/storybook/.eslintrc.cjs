/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('./node_modules/@repo/config-eslint/storybook.js')],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },

  ignorePatterns: ['*.html', '.*.js', '.*.cjs', '*.config.js', 'node_modules/'],
};
