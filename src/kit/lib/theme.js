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

// @TODO: Refactor Theme:

// - [-] borderProperties
const borderProperties = {
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
// - [ ] colorProperties
// - [ ] shadowProperties
// - [ ] spacingProperties
// - [ ] typographyProperties

// Properties

const commonProperties = {
  // @TODO: factor-out all the constants from theme
  breakpoints: breakpointsPxArray,

  fontSizes: [
    '0.6rem',
    '0.7rem',
    '0.8rem',
    '0.9rem',
    '1rem', // [4]
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '4rem',
    '8vw',
  ],
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
  heights: [16, 32, 64, 128, 256],
  inputRadius: '0.25em',
  inputRadiusLG: '5em',
  inputRadiusSM: '0.125em',

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
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  transition: {
    animation: 'cubic-bezier(0.28, 0.47, 0.83, 1.01)',
    speed: {
      fast: '0.075s',
      medium: '0.25s',
      slow: '0.5s',
    },
  },
  width: [16, 32, 64, 128, 256],
};

// eslint-disable-next-line prefer-destructuring
commonProperties.radii.max = commonProperties.radii[7];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.body = commonProperties.fontSizes[4];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.h1 = commonProperties.fontSizes[9];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.h2 = commonProperties.fontSizes[8];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.h3 = commonProperties.fontSizes[7];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.h4 = commonProperties.fontSizes[5];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.h5 = commonProperties.fontSizes[4];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.h6 = commonProperties.fontSizes[3];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.caption = commonProperties.fontSizes[2];
// eslint-disable-next-line prefer-destructuring
commonProperties.fontSizes.eyebrow = commonProperties.fontSizes[3];

const radiusProperties = {
  radius: {
    circle: commonProperties.radii.max,
    lg: commonProperties.radii[4],
    max: commonProperties.radii.max,
    md: commonProperties.radii[3],
    sm: commonProperties.radii[1],
    square: commonProperties.radii[0],
    // eslint-disable-next-line sort-keys
    input: {
      regular: commonProperties.radii[2],
      round: commonProperties.radii.max,
      rounded: commonProperties.radii[3],
      square: commonProperties.radii[0],
      squared: commonProperties.radii[1],
    },
  },
};

const theme = {
  ...commonProperties,
  ...borderProperties,
  ...radiusProperties,
  colors,
  skeletonColor: colors.fadedPrimary,
  skeletonShineColor: colors.secondary,
  // eslint-disable-next-line sort-keys
  name: 'light',
};

export default theme;
