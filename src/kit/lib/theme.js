/* eslint-disable prefer-destructuring */
import React, { ReactNode, createContext, useContext } from 'react';
import { colors } from './colors';
import {
  breakpointsPxArray,
  fancyFontStack,
  serifFontStack,
  sansSerifFontStack,
  monoFontStack,
  inputFontStack,
  headingFontStack,
  eyebrowFontStack,
  captionFontStack,
  buttonFontStack,
  bodyFontStack,
} from './constants';

export const borderProps = {
  borders: [
    0,
    `1px solid ${colors.border}`,
    `2px solid ${colors.border}`,
    `4px solid ${colors.border}`,
    `8px solid ${colors.border}`,
    `16px solid ${colors.border}`,
    `32px solid ${colors.border}`,
  ],
};

export const fontProps = {
  fontSizes: [8, 10, 12, 14, 16, 20, 24, 32, 64],
  fontWeights: [100, 300, 500, 700, 900],
  fonts: {
    fancy: fancyFontStack,
    mono: monoFontStack,
    sansSerif: sansSerifFontStack,
    serif: serifFontStack,
    // eslint-disable-next-line sort-keys
    body: bodyFontStack,
    button: buttonFontStack,
    caption: captionFontStack,
    eyebrow: eyebrowFontStack,
    heading: headingFontStack,
    input: inputFontStack,
  },
};

export const effectProps = {
  shadows: {
    large: `0 15px 25px -4px var(--color-shadow-shadowColorRGB, rgba(0,0,0,0.25)),
        inset 0 -3px 4px -1px var(--color-shadow-shadowColorRGB, rgba(255,255,255,0.125)),
        0 -10px 15px -1px var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125)),
        inset 0 3px 4px -1px var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125)),
        inset 0 0 5px 1px var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125)),
        inset 0 20px 30px 0 var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125))`,
    medium: `0 15px 25px -2px var(--color-shadow-shadowColorRGB, rgba(0,0,0,0.25)),
        inset 0 -1px 1px -1px var(--color-shadow-shadowColorRGB, rgba(0,0,0,0.25)),
        inset 0 20px 30px 0 var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125))`,
    small: `0 15px 25px -4px var(--color-shadow-shadowColorRGB, rgba(0,0,0,0.25)),
        inset 0 -1px 3px -1px var(--color-shadow-shadowColorRGB, rgba(0,0,0,0.25)),
        inset 0 3px 4px -1px var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125)),
        inset 0 0 5px 1px var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125)),
        inset 0 20px 30px 0 var(--color-shadow-innerShineColorRGB, rgba(255,255,255,0.125))`,
  },
  transition: {
    animation: 'cubic-bezier(0.28, 0.47, 0.83, 1.01)',
    speed: {
      fast: '0.075s',
      medium: '0.25s',
      slow: '0.5s',
    },
  },
};

export const spaceProps = {
  breakpoints: breakpointsPxArray,
  heights: [16, 32, 64, 128, 256],
  letterSpacings: {
    mega: '0.25em',
    normal: 'normal',
    tight: '-0.05em',
    tracked: '0.1em',
  },
  lineHeights: {
    copy: 1.5,
    solid: 1,
    title: 1.25,
  },
  maxWidths: [16, 32, 64, 128, 256, 468, 512, 600, 768, 960, 1024, 1224, 1536],
  radii: [0, 2, 4, 8, 16, 32, 64, 9999],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  width: [16, 32, 64, 128, 256],
};

spaceProps.space.xs = spaceProps.space[2];
spaceProps.space.sm = spaceProps.space[3];
spaceProps.space.md = spaceProps.space[4];
spaceProps.space.lg = spaceProps.space[5];
spaceProps.space.xl = spaceProps.space[6];
spaceProps.space['2xl'] = spaceProps.space[7];
spaceProps.space['3xl'] = spaceProps.space[8];

spaceProps.radii.full = '99999rem';
spaceProps.radii.round = '99999rem';
spaceProps.radii.rounded = spaceProps.radii[4];
spaceProps.radii.base = spaceProps.radii[3];
spaceProps.radii.squared = spaceProps.radii[1];
spaceProps.radii.square = spaceProps.radii[0];

spaceProps.radii.sm = spaceProps.radii[1];
spaceProps.radii.md = spaceProps.radii[3];
spaceProps.radii.lg = spaceProps.radii[4];
spaceProps.radii.xl = spaceProps.radii[5];
spaceProps.radii['2xl'] = spaceProps.radii[6];
spaceProps.radii['3xl'] = spaceProps.radii[7];

fontProps.fontSizes.body = fontProps.fontSizes[4];
fontProps.fontSizes.button = fontProps.fontSizes[4];
fontProps.fontSizes.h1 = fontProps.fontSizes[9];
fontProps.fontSizes.h2 = fontProps.fontSizes[8];
fontProps.fontSizes.h3 = fontProps.fontSizes[7];
fontProps.fontSizes.h4 = fontProps.fontSizes[5];
fontProps.fontSizes.h5 = fontProps.fontSizes[4];
fontProps.fontSizes.h6 = fontProps.fontSizes[3];
fontProps.fontSizes.caption = fontProps.fontSizes[2];
fontProps.fontSizes.eyebrow = fontProps.fontSizes[3];
fontProps.fontSizes.xs = '0.75rem';
fontProps.fontSizes.sm = '0.875rem';
fontProps.fontSizes.md = '1rem';
fontProps.fontSizes.lg = '1.125rem';
fontProps.fontSizes.xl = '1.25rem';
fontProps.fontSizes['2xl'] = '1.5rem';
fontProps.fontSizes['3xl'] = '1.8rem';
fontProps.fontSizes['4xl'] = '2.25rem';
fontProps.fontSizes['5xl'] = '3rem';
fontProps.fontSizes['6xl'] = '3.5rem';
fontProps.fontSizes['7xl'] = '4.5rem';
fontProps.fontSizes['8xl'] = '6rem';
fontProps.fontSizes['9xl'] = '8rem';

// Inspired by Chakra UI
// eslint-disable-next-line no-unused-vars
const zIndeces = {
  /* eslint-disable sort-keys */
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
  /* eslint-enable sort-keys */
};

const inputProps = {
  input: {
    radius: {
      square: spaceProps.radii[0],
      // eslint-disable-next-line sort-keys
      sm: spaceProps.radii[1],
      // eslint-disable-next-line sort-keys
      md: spaceProps.radii[2],
      // eslint-disable-next-line sort-keys
      lg: spaceProps.radii[3],
      round: spaceProps.radii.max,
    },
  },
};

const surfaceProps = {
  surface: {
    background: colors.background,
    radius: spaceProps.radii[3],
  },
};

const theme = {
  ...borderProps,
  ...effectProps,
  ...fontProps,
  ...inputProps,
  ...spaceProps,
  ...surfaceProps,
  colors,
  name: 'light',
};

export default theme;

// The below theme was added when we started using the keystone-ui parts. - TODO: Review
export const ThemeContext = createContext({
  theme,
});

export const ThemeProvider = ({ theme: providedTheme, children }) => (
  <ThemeContext.Provider value={{ theme: providedTheme }}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => {
  const { theme: themeFromContext } = useContext(ThemeContext);
  return themeFromContext;
};
