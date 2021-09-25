import { FlyGlobalStyle } from "../src/kit";
import FlyThemeProvider from "../src/kit/components/FlyThemeProvider";
import Box from "../src/kit/components/layout/Box";
import theme from "../src/kit/lib/theme";

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
      <FlyGlobalStyle />
      <Box p={3} bg="background">
        <Story />
      </Box>
    </FlyThemeProvider>
  )
];