export default {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/cypress/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
