/** @type {import('jest').Config} */
const config = {
  verbose: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/src/*.types.ts",
    "<rootDir>/src/mocks/",
    "<rootDir>/src/environment/",
  ],
};

module.exports = config;
