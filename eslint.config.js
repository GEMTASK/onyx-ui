import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  globalIgnores(["dist", "eslint.config.js"]),
  {
    files: ["**/*.{js,ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      {
        languageOptions: {
          parserOptions: {
            projectService: true,
          },
        },
      },
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "eqeqeq": "error",
      "@typescript-eslint/no-unused-vars": "off",
      // "@typescript-eslint/strict-boolean-expressions": "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": "error",
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "comma",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "comma",
            "requireLast": false
          },
          "overrides": {
            "interface": {
              "multiline": {
                "delimiter": "semi",
                "requireLast": true
              }
            }
          }
        }
      ]
    }
  }
]);
