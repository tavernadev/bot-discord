module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text'],
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.spec.js']
}
