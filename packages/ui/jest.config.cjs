/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm', // for ESM + TS support
  testEnvironment: 'jsdom',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }], // transform TS + ESM
  },

  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  collectCoverage: true,
  coverageDirectory: 'coverage',

  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // ⚡ Add module aliases
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // resolve @/ imports
    '\\.(css|less|scss)$': 'identity-obj-proxy', // mock CSS
  },
};
