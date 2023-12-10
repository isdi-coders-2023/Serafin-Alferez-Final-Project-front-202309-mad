/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['main.tsx, vite-env.d.ts',
  'src/components/app.tsx',
  'src/components/app.routes/app.routes.tsx',
  'src/components/pages/home.tsx',
  'src/services/images.ts',
],
};
