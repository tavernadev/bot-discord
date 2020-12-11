module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/*.js'],
  coveragePathIgnorePatterns: ['/src/tests/'],
  coverageReporters: ['json', 'text', 'html'],
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js']
}
