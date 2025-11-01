import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment.
  dir: './',
});

// Add any custom Jest config here.
const config: Config = {
  preset: 'ts-jest', // Use ts-jest for TypeScript support.
  testEnvironment: 'jest-environment-jsdom', // Simulates a browser DOM for React components.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: Path to a setup file (create this next).
  moduleNameMapper: {
    // Mock Next.js image optimization (if using <Image> in tests).
    '^@next/image$': '<rootDir>/__mocks__/next-image.js', // Create this mock file if needed.
    // Mock CSS/SCSS imports.
    '\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  // Ignore Next.js build artifacts.
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // Collect coverage (optional).
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.d.ts',
  ],
};

export default createJestConfig(config);