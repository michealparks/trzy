import { addons } from '@storybook/manager-api'

addons.setConfig({
  enableShortcuts: false,
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: false },
    fullscreen: { hidden: true },
  },
})
