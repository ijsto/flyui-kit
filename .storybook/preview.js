import FlyThemeProvider from "../src/components/FlyThemeProvider";
import theme from "../src/lib/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <FlyThemeProvider theme={theme}>
      <Story />
    </FlyThemeProvider>
  )
];