import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../lib/theme';

const FlyThemeProvider = ({ children, theme: providedTheme }) => {
  const mergedTheme = { ...theme, ...providedTheme };
  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
};

export default FlyThemeProvider;
