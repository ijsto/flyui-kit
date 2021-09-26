import { css } from 'styled-components';

import { primaryGradientText } from './gradientMixins';

const headingSpacingFactor = 0.5;

export const baseTextStyles = ({ gradient }) => {
  if (gradient) {
    return css`
      /* @TODO: Add gradient variants */
      ${primaryGradientText}
    `;
  }
  return css``;
};

export const headingStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.heading || 'inherit'};
`;

export const h1Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${theme.fontSizes.h1};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h2Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${theme.fontSizes.h2};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h3Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${theme.fontSizes.h3};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h4Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${theme.fontSizes.h4};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h5Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${theme.fontSizes.h5};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h6Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${theme.fontSizes.h6};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;

export const captionTextStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${theme.fonts.caption};
  font-weight: 100;
  font-size: ${theme.fontSizes.caption || '0.6rem'};
  line-height: 1rem;
  letter-spacing: 0.1px;
`;

export const eyebrowStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${theme.fonts.eyebrow};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.eyebrow};
  letter-spacing: 0.1px;
`;

export const defaultTextStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${theme.fonts.body};
`;

export const textVariantStyles = ({ variant }) => css`
  ${variant === 'caption'
    ? captionTextStyles
    : variant === 'eyebrow'
    ? eyebrowStyles
    : variant === 'h1'
    ? h1Styles
    : variant === 'h2'
    ? h2Styles
    : variant === 'h3'
    ? h3Styles
    : variant === 'h4'
    ? h4Styles
    : variant === 'h5'
    ? h5Styles
    : variant === 'h6'
    ? h6Styles
    : defaultTextStyles}
`;
