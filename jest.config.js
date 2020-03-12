module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'scss'],
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.s?css$': '<rootDir>/src/__mocks__/styleMock.js',
  },
};
