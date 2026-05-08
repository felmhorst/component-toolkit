// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import nextConfig from "eslint-config-next/core-web-vitals";
import tsConfig from "eslint-config-next/typescript";
import storybook from "eslint-plugin-storybook";

const eslintConfig = [
  // ── Base configs ──────────────────────────────────────────────────────────
  ...nextConfig,
  ...tsConfig,
  ...storybook.configs["flat/recommended"],

  // Override react.version to skip auto-detection — eslint-plugin-react's detect
  // uses context.getFilename() which was removed in ESLint 10 flat config mode
  {
    settings: {
      react: { version: "19" },
    },
  },

  // ── General rules (all JS/TS files) ───────────────────────────────────────
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      // Prevents hidden side effects — a function must do exactly what its name says
      "no-param-reassign": "error",
      "no-console": "warn",
      // Matches the 40-line function limit from CLAUDE.md
      "max-lines-per-function": [
        "warn",
        { max: 40, skipComments: true, skipBlankLines: true },
      ],
    },
  },

  // ── TypeScript rules (no type information required) ───────────────────────
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      // Upgrade from Next.js default 'warn'; underscore prefix is the escape hatch
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
          disallowTypeAnnotations: true,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  },

  // ── TypeScript type-aware rules (requires full type information) ───────────
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: [".storybook/**"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Enforces "Throw exceptions, never return error codes or null" from CLAUDE.md
      "@typescript-eslint/only-throw-error": [
        "error",
        {
          allowThrowingAny: false,
          allowThrowingUnknown: false,
          allowRethrowing: true,
        },
      ],
      // Enforces all naming conventions from CLAUDE.md
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        // PascalCase needed for React function components
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          selector: "typeAlias",
          format: ["PascalCase"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "typeParameter",
          format: ["PascalCase"],
        },
        // Enforce is/has/should/can/will/did prefix for boolean variables
        {
          selector: "variable",
          types: ["boolean"],
          format: ["camelCase", "PascalCase"],
          prefix: ["is", "has", "should", "can", "will", "did"],
        },
        // Destructured variables can't be renamed without changing semantics
        {
          selector: "variable",
          modifiers: ["destructured"],
          format: null,
        },
        // CSS custom properties used as object keys require quotes and can't be camelCase
        {
          selector: "property",
          modifiers: ["requiresQuotes"],
          format: null,
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],
    },
  },
];

export default eslintConfig;
