export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "semi": ["error", "never"],
      "quotes": ["error", "double"],
    },
  },
]