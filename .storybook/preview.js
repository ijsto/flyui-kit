import FlyThemeProvider from "../src/components/FlyThemeProvider";
import Box from "../src/components/layout/Box";
import theme from "../src/lib/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
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
      <Box p={3} bg="background">
        <Story />
      </Box>
    </FlyThemeProvider>
  )
];