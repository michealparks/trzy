export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      language: 'typescript',
    },
    story: {
      inline: true,
    },
    canvas: {
      sourceState: 'shown'
    },
  },
}
