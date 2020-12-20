module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/tests/',
    '<rootDir>/build/',
    '.test.js'
  ],
  coverageReporters: ['lcov', 'json', 'text', 'html'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.js']
}
