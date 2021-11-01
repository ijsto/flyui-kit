import { css } from 'styled-components';
import { headingFontStack } from '../constants';

import { primaryGradientText } from './gradientMixins';

const fontSizeStyles = ({ fontSize }) => {
  switch (fontSize) {
    case 'xs':
      return css`
        font-size: var(--fly-fontSizes-xs, 0.75rem);
      `;
    case 'sm':
      return css`
        font-size: var(--fly-fontSizes-sm, 0.875rem);
      `;
    case 'md':
      return css`
        font-size: var(--fly-fontSizes-md, 1rem);
      `;
    case 'lg':
      return css`
        font-size: var(--fly-fontSizes-lg, 1.125rem);
      `;
    case 'xl':
      return css`
        font-size: var(--fly-fontSizes-xl, 1.25rem);
      `;
    case '2xl':
      return css`
        font-size: var(--fly-fontSizes-2xl, 1.5rem);
      `;
    case '3xl':
      return css`
        font-size: var(--fly-fontSizes-3xl, 1.8rem);
      `;
    case '4xl':
      return css`
        font-size: var(--fly-fontSizes-4xl, 2.25rem);
      `;
    case '5xl':
      return css`
        font-size: var(--fly-fontSizes-5xl, 3rem);
      `;
    case '6xl':
      return css`
        font-size: var(--fly-fontSizes-6xl, 3.5rem);
      `;
    case '7xl':
      return css`
        font-size: var(--fly-fontSizes-7xl, 4.5rem);
      `;
    case '8xl':
      return css`
        font-size: var(--fly-fontSizes-8xl, 6rem);
      `;
    case '9xl':
      return css`
        font-size: var(--fly-fontSizes-9xl, 8rem);
      `;

    default:
      return css`
        font-size: var(--fly-fontSizes-md, 1rem);
      `;
  }
};

export const baseTextStyles = ({ gradient }) => css`
  //  @TODO: Add gradient variants;
  ${gradient && primaryGradientText};
  ${fontSizeStyles};
`;

export const headingStyles = ({ theme }) => css`
  ${baseTextStyles};
  color: ${theme.colors.heading || 'inherit'};
  font-family: ${`var(--fonts-heading, ${
    theme.fonts.heading || headingFontStack
  })`};
`;

export const captionTextStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${`var(--fonts-caption, ${theme.fonts.caption || 'inherit'})`};
  font-weight: 100;
  font-size: ${`var(--font-size-caption, ${theme.fontSizes.caption || 14}px)`};
  line-height: calc(
    ${`var(--font-size-caption, ${theme.fontSizes.caption || 14}px)`} + 4px
  );
  letter-spacing: 0.1px;
`;

export const eyebrowStyles = ({ theme }) => css`
  ${baseTextStyles};
  font-family: ${`var(--fonts-eyebrow, ${
    theme.fonts.eyebrow || 'Verdana, sans-serif'
  })`};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${`var(--font-size-eyebrow, ${theme.fontSizes.eyebrow || 18}px)`};
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
    : defaultTextStyles}
`;
