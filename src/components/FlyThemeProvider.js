import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../lib/theme';

const FlyThemeProvider = ({ children, theme: providedTheme }) => (
  <ThemeProvider theme={{ ...theme, ...providedTheme }}>
    {children}
  </ThemeProvider>
);

export default FlyThemeProvider;
