module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/server/__tests__/data',
    '<rootDir>/server/__tests__/setup'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/client/testSetup.js'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/client/__mocks__/styleMock.js'
  }
}
