import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-prototype-builtins": "off",
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["eslin:recommended", "plugi:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      // Add any custom rules here
    },
  },
];
