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
  cardRadius: '0.75em',
  cardRadiusLG: '1.25em',
  cardRadiusSM: '8px',
  cardRadiusXS: '4px',
  cardRadiusXXS: '3px',

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

const theme = {
  ...commonProperties,
  ...borderProperties,
  colors,
  skeletonColor: colors.fadedPrimary,
  skeletonShineColor: colors.secondary,
  // eslint-disable-next-line sort-keys
  name: 'light',
};

export default theme;
