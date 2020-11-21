module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: [
        'e2e/**/*.{ts,tsx,js}',
        '__tests__/**',
        '__mocks__/**/*.ts',
        '__mocks__/**/*.tsx',
        'src/libs/helpers/jest/*.ts',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
