module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      },
    },
    rules: {
      "no-console": "warn",       // Warn if there are console statements
      "no-unused-vars": "warn",   // Warn for any unused variables
      "quotes": ["error", "double"], // Enforce double quotes
      "semi": ["error", "always"],   // Enforce semicolons at the end of lines
      "eqeqeq": "error"            // Enforce strict equality
    },
  },
];
