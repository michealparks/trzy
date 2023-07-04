import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
  stories: [
    '../src/core/index.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true
  },
}

export default config