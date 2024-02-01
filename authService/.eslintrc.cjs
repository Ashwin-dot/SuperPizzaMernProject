const { rules } = require("eslint-config-prettier");

/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    // project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    "no-console": "error",
    "dot-not": "error",
  },
};
