module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "design",
        "refactor",
        "style",
        "docs",
        "test",
        "chore",
        "post",
        "rename",
        "remove"
      ]
    ]
  }
};
