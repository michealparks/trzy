import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  enableShortcuts: false,
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: false },
    fullscreen: { hidden: true },
  },
  theme: create({
    base: 'light',
    brandTitle: 'trzy',
    // brandUrl: 'https://example.com',
    // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
    // brandTarget: '_self',
  }),
})
