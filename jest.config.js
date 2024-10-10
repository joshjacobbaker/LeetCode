module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
