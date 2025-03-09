module.exports = {
  silent: true,
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/__mocks__/jest-css-mock.js",
  },
};
