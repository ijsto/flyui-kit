import { css } from 'styled-components';
import { headingFontStack } from '../constants';

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
  color: ${theme.colors.heading || 'inherit'};
  font-family: ${`var(--fonts-heading, ${
    theme.fonts.heading || headingFontStack
  })`};
`;

export const h1Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${`var(--fonts-size-h1, ${theme.fontSizes.h1 || 64}px)`};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h2Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${`var(--fonts-size-h2, ${theme.fontSizes.h2 || 40}px)`};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h3Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${`var(--fonts-size-h3, ${theme.fontSizes.h3 || 32}px)`};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h4Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${`var(--fonts-size-h4, ${theme.fontSizes.h4 || 24}px)`};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h5Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${`var(--fonts-size-h5, ${theme.fontSizes.h5 || 16}px)`};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;
export const h6Styles = ({ margin, theme }) => css`
  ${headingStyles};
  font-weight: 600;
  font-size: ${`var(--fonts-size-h6, ${theme.fontSizes.h6 || 12}px)`};
  letter-spacing: ${`-${headingSpacingFactor * 1}px`};
  line-height: 1.25;
  margin-bottom: ${margin || '1.5rem'};
`;

export const captionTextStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${theme.fonts.caption};
  font-weight: 100;
  font-size: ${`var(--fonts-size-caption, ${theme.fontSizes.caption || 14}px)`};
  line-height: 1rem;
  letter-spacing: 0.1px;
`;

export const eyebrowStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${theme.fonts.eyebrow};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${`var(--fonts-size-eyebrow, ${theme.fontSizes.eyebrow || 18}px)`};
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
