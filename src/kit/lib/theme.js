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

// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.body = fontProps.fontSizes[4];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.button = fontProps.fontSizes[4];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.h1 = fontProps.fontSizes[9];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.h2 = fontProps.fontSizes[8];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.h3 = fontProps.fontSizes[7];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.h4 = fontProps.fontSizes[5];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.h5 = fontProps.fontSizes[4];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.h6 = fontProps.fontSizes[3];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.caption = fontProps.fontSizes[2];
// eslint-disable-next-line prefer-destructuring
fontProps.fontSizes.eyebrow = fontProps.fontSizes[3];

// eslint-disable-next-line prefer-destructuring
spaceProps.radii.max = spaceProps.radii[7];

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

export const radiusProps = {
  radius: {
    circle: spaceProps.radii.max,
    lg: spaceProps.radii[4],
    max: spaceProps.radii.max,
    md: spaceProps.radii[3],
    sm: spaceProps.radii[1],
    square: spaceProps.radii[0],
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
  ...radiusProps,
  ...spaceProps,
  ...surfaceProps,
  colors,
  name: 'light',
};

export default theme;
