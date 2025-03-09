const js = require("@eslint/js");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  js.configs.recommended,
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      "coverage",
      "public",
      "**/*.bundle.js",
    ],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];
