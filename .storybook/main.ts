import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: true
  },
  brand: {
    name: 'My Custom Text',
  }
}

export default config