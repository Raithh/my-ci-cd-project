module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    rules: {
      "no-console": "warn",       // Warn if there are console statements
      "no-unused-vars": "warn",   // Warn for any unused variables
      "quotes": ["error", "double"], // Enforce double quotes
      "semi": ["error", "always"],   // Enforce semicolons at the end of lines
      "eqeqeq": "error"            // Enforce strict equality
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
    },
  },
];
