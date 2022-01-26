import { css } from 'styled-components';

import { primaryGradientText } from './gradientMixins';

const fontSizeStyles = ({ fontSize, theme }) => {
  switch (fontSize) {
    case 'xs':
      return css`
        font-size: var(
          --fly-fontSizes-xs,
          ${theme.fontSizes[fontSize] || '0.75rem'}
        );
      `;
    case 'sm':
      return css`
        font-size: var(
          --fly-fontSizes-sm,
          ${theme.fontSizes[fontSize] || '0.875rem'}
        );
      `;
    case 'md':
      return css`
        font-size: var(
          --fly-fontSizes-md,
          ${theme.fontSizes[fontSize] || '1rem'}
        );
      `;
    case 'lg':
      return css`
        font-size: var(
          --fly-fontSizes-lg,
          ${theme.fontSizes[fontSize] || '1.125rem'}
        );
      `;
    case 'xl':
      return css`
        font-size: var(
          --fly-fontSizes-xl,
          ${theme.fontSizes[fontSize] || '1.25rem'}
        );
      `;
    case '2xl':
      return css`
        font-size: var(
          --fly-fontSizes-2xl,
          ${theme.fontSizes[fontSize] || '1.5rem'}
        );
      `;
    case '3xl':
      return css`
        font-size: var(
          --fly-fontSizes-3xl,
          ${theme.fontSizes[fontSize] || '1.8rem'}
        );
      `;
    case '4xl':
      return css`
        font-size: var(
          --fly-fontSizes-4xl,
          ${theme.fontSizes[fontSize] || '2.25rem'}
        );
      `;
    case '5xl':
      return css`
        font-size: var(
          --fly-fontSizes-5xl,
          ${theme.fontSizes[fontSize] || '3rem'}
        );
      `;
    case '6xl':
      return css`
        font-size: var(
          --fly-fontSizes-6xl,
          ${theme.fontSizes[fontSize] || '3.5rem'}
        );
      `;
    case '7xl':
      return css`
        font-size: var(
          --fly-fontSizes-7xl,
          ${theme.fontSizes[fontSize] || '4.5rem'}
        );
      `;
    case '8xl':
      return css`
        font-size: var(
          --fly-fontSizes-8xl,
          ${theme.fontSizes[fontSize] || '6rem'}
        );
      `;
    case '9xl':
      return css`
        font-size: var(
          --fly-fontSizes-9xl,
          ${theme.fontSizes[fontSize] || '8rem'}
        );
      `;

    // # Variants

    // ## Headings
    case 'h1':
      return css`
        font-size: var(
          --fly-fontSizes-h1,
          ${theme.fontSizes[fontSize || 'h1'] || '2.5rem'}
        );
        line-height: var(--fly-lineHeights-h1, 1.25);
      `;
    case 'h2':
      return css`
        font-size: var(
          --fly-fontSizes-h2,
          ${theme.fontSizes[fontSize || 'h2'] || '2rem'}
        );
        line-height: var(--fly-lineHeights-h2, 1.25);
      `;
    case 'h3':
      return css`
        font-size: var(
          --fly-fontSizes-h3,
          ${theme.fontSizes[fontSize || 'h3'] || '1.5rem'}
        );
        line-height: var(--fly-lineHeights-h3, 1.25);
      `;
    case 'h4':
      return css`
        font-size: var(
          --fly-fontSizes-h4,
          ${theme.fontSizes[fontSize || 'h4'] || '1.25rem'}
        );
        line-height: var(--fly-lineHeights-h4, 1.25);
      `;
    case 'h5':
      return css`
        font-size: var(
          --fly-fontSizes-h5,
          ${theme.fontSizes[fontSize || 'h5'] || '1rem'}
        );
        line-height: var(--fly-lineHeights-h5, 1.25);
      `;
    case 'h6':
      return css`
        font-size: var(
          --fly-fontSizes-h6,
          ${theme.fontSizes[fontSize || 'h6'] || '0.875rem'}
        );
        line-height: var(--fly-lineHeights-h6, 1.25);
      `;

    default:
      return css`
        font-size: var(
          --fly-fontSizes-md,
          ${theme.fontSizes[fontSize] || '1rem'}
        );
      `;
  }
};

export const baseTextStyles = ({ gradient }) => css`
  //  @TODO: Add gradient variants;
  ${gradient && primaryGradientText};
  ${fontSizeStyles};
`;

export const textVariantStyles = () => baseTextStyles;
