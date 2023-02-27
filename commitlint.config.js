module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [1, 'never'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['WA-'],
    },
  },
};
