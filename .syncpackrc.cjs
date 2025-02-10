// @ts-check

/** @type {import("syncpack").RcFile} */
module.exports = {
  dependencyTypes: ['dev', 'prod', 'peer'],
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label: 'Internal config packages should be pinned to "*" or "workspace:*"',
      packages: ['**'],
      dependencies: ['@repo/config-eslint', '@repo/config-tailwind', '@repo/config-ts', '@repo/ui-shadcn'],
      dependencyTypes: ['dev', 'prod', 'peer'],
      pinVersion: ['*', 'workspace:*'],
    },
    {
      label: 'Use next 15 rc version in apps/web and apps/docs',
      packages: ['@app/web', '@app/docs'],
      dependencies: ['react', 'react-dom', 'next'],
      policy: 'sameRange',
    },
    {
      label: 'Use shadcn/ui version in apps/storybook',
      packages: ['@app/storybook', '@repo/ui-shadcn'],
      dependencies: ['tailwindcss'],
      policy: 'sameRange',
    },
  ],
  semverGroups: [
    {
      range: '',
      label: 'Pinned dependencies should not have a range',
      packages: ['**'],
      dependencies: ['@chromatic-com/storybook', 'react-day-picker', 'cmdk'],
      dependencyTypes: ['dev', 'prod', 'peer'],
    },
    {
      range: '^',
      label: 'External libraries should use "^" range',
      packages: ['**'],
      dependencies: ['**'],
      dependencyTypes: ['dev', 'prod'],
    },
  ],
};
