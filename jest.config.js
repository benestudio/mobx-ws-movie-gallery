module.exports = {
  roots: ["<rootDir>/src"],
  setupFiles: ["dotenv/config", "./src/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true
};
