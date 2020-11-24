module.exports = {
  default: [
    './e2e/features',
    '--require ./e2e/features/**/*.ts',
    '--require-module ts-node/register',
    '--format-options \'{"snippetInterface": "synchronous"}\'',
  ].join(' '),
};
