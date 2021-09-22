/**
 * Layout
 */

// Heights
export const headerHeight = 64;
export const headerHeightPx = `${headerHeight}px`;

export const breakPointValues = ['30em', '40em', '52em', '64em', '80em'];
export const breakpoints = {
  mobile: 468,
  mobileLg: 600,
  tablet: 768,
  tabletLg: 960,
  // eslint-disable-next-line sort-keys
  desktop: 1224,
  desktopLg: 1354,
};

// Add px suffix
// eslint-disable-next-line node/no-unsupported-features/es-builtins
export const breakpointsPx = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(breakpoints).map(([key, value]) => [key, `${value}px`])
);

// Creates an array of breakpoints px values: ["468px", "600px" ...]
export const breakpointsArray = Object.values(breakpoints).sort(
  (a, b) => a - b
);
export const breakpointsPxArray = Object.values(breakpointsPx);

// These queries are for mobile first designs
// @TODO: (Scott) Add documentation
// eslint-disable-next-line node/no-unsupported-features/es-builtins
export const breakpointQueries = Object.fromEntries(
  Object.entries(breakpointsPx).map(([key, value]) => [
    key,
    `@media (min-width: ${value})`,
  ])
);

/**
 * Borders
 */

// Widths
export const borderWidth = 1;
export const borderWidthPx = `${borderWidth}px`;

// Radiuses
export const borderRadiusSm = 2;
export const borderRadiusSmPx = `${borderRadiusSm}px`;
export const borderRadius = 4;
export const borderRadiusPx = `${borderRadius}px`;

// CARD
export const cardRadius = '0.75em';
export const cardRadiusXXS = '3px';
export const cardRadiusXS = '4px';
export const cardRadiusSM = '8px';
export const cardRadiusLG = '1.25em';

/**
 * Fonts
 */

// Core Stacks
export const monoFontStack = 'Courier New, sans-serif';
export const sansSerifFontStack = 'Avant Garde, sans-serif';
export const fancyFontStack = 'Brush Script MT, sans-serif';
export const serifFontStack = 'Cambria, serif';
export const boldSerifFontStack = 'Cambria, serif';

// Global UI Stacks
export const buttonFontStack = sansSerifFontStack;
export const captionTextFontStack = sansSerifFontStack;
export const headingFontStack = serifFontStack;
export const inputFontStack = sansSerifFontStack;

/**
 * Inputs
 */

// Radiuses
export const inputRadius = '0.25em';
export const inputRadiusSM = '0.125em';
export const inputRadiusLG = '5em';

// Heights
export const inputHeightTiny = 24;
export const inputHeightSm = 32;
export const inputHeightMd = 40;
export const inputHeightLg = 64;

// Heights in Pixels
export const inputHeightTinyPx = `${inputHeightTiny}px`;
export const inputHeightSmPx = `${inputHeightSm}px`;
export const inputHeightMdPx = `${inputHeightMd}px`;
export const inputHeightLgPx = `${inputHeightLg}px`;

// Input Text sizes
export const textSizeTag = `0.75rem`;
export const textSizeSm = `0.75rem`;
export const textSizeMd = `1rem`;
export const textSizeLg = `1rem`;
export const textSizeXl = `1.25rem`;

// Buttons
export const primaryButtonBorderRadius = '4px';
export const primaryButtonBorderRadiusSm = '2px';
