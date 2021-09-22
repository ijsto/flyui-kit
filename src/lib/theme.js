import { colors } from './colors';
import {
  breakpointsPxArray,
  fancyFontStack,
  serifFontStack,
  sansSerifFontStack,
  monoFontStack,
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
  // Radiuses
  // CARD
  breakpoints: breakpointsPxArray,
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  cardRadius: '0.75em',
  cardRadiusLG: '1.25em',
  cardRadiusSM: '8px',
  cardRadiusXS: '4px',
  cardRadiusXXS: '3px',

  fontSizes: [
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '0.85rem',
    '1rem',
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
    button: sansSerifFontStack,
    fancy: fancyFontStack,
    mono: monoFontStack,
    sansSerif: sansSerifFontStack,
    serif: serifFontStack,
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
  trans125: 'transition: all 0.125s cubic-bezier(0.645, 0.045, 0.355, 1);',
  trans25: 'transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);',
  width: [16, 32, 64, 128, 256],
};

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
