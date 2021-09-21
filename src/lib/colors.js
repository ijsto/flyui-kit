// @TODO: Figure out how to implement (loaders, ... ?)
// import Color from 'color';

// Our colour palette system [WIP]

const backgroundCol = '#F7F7F7';
const borderCol = '#B838F0';
const errorCol = '#F21368';
const infoCol = '#38B8F0';
const inactiveCol = '#A3A1A8';
const linkTextCol = '#B838F0';
const primaryCol = '#B838F0';
const secondaryCol = '#F21368';
const surfaceCol = '#FFF';
const svgFillCol = '#333644';
const svgFillHoverCol = '#B838F0';
const contrastSurfaceCol = '#333644';
const contrastTextCol = '#bdd9f2';
const textCol = '#333644';
const textPlaceholderCol = '#c7bfc9';
const trueWhite = '#FFFFFF';
const whiteCol = '#fff';

export const colors = {
  background: backgroundCol,
  border: borderCol,
  contrastSurface: contrastSurfaceCol,
  contrastText: contrastTextCol,
  error: errorCol,
  fadedPrimary: '#457980',
  // fadedPrimaryRGB: Color('#457980').rgb().array().join(','),
  inactive: inactiveCol,
  // inactiveRGB: Color(inactiveCol).rgb().array().join(','),
  info: infoCol,
  // infoRGB: Color(infoCol).rgb().array().join(','),
  linkText: linkTextCol,
  ltAccent: '#457980',
  // ltAccentRGB: Color('#457980').rgb().array().join(','),
  ltBlue: '#0086FF',
  // ltBlueRGB: Color('#0086FF').rgb().array().join(','),
  ltGrey: '#e2e2e2',
  // ltGreyRGB: Color('#e2e2e2').rgb().array().join(','),
  placeholder: textPlaceholderCol,
  primary: primaryCol,
  // primaryRGB: Color(primaryCol).rgb().array().join(','),
  primaryShade: [
    // Color(primaryCol).lighten(0.5).hex(),
    // Color(primaryCol).lighten(0.25).hex(),
    // Color(primaryCol).hex(),
    // Color(primaryCol).darken(0.25).hex(),
    // Color(primaryCol).darken(0.5).hex(),
  ],
  secondary: secondaryCol,
  // secondaryRGB: Color(secondaryCol).rgb().array().join(','),
  surface: surfaceCol,
  // surfaceRGB: Color(surfaceCol).rgb().array().join(','),
  surfaceShade: [
    // Color(surfaceCol).lighten(0.5).hex(),
    // Color(surfaceCol).lighten(0.25).hex(),
    // Color(surfaceCol).hex(),
    // Color(surfaceCol).darken(0.25).hex(),
    // Color(surfaceCol).darken(0.5).hex(),
  ],
  svgFill: svgFillCol,
  svgHoverFill: svgFillHoverCol,
  text: textCol,
  trueWhite,
  // trueWhiteRGB: Color(trueWhite).rgb().array().join(','),
  white: whiteCol,
  // whiteRGB: Color(whiteCol).rgb().array().join(','),
};
