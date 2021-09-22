import { css } from 'styled-components';
import { serifStyles, sansSerifStyles, monoStyles } from './typographyMixins';

// iJS

export const getButtonVariantBgColor = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        background: var(--colors-primary, ${theme.colors.primary});
      `
    : variant === 'primary'
    ? css`
        background: var(--colors-primary, ${theme.colors.primary});
      `
    : variant === 'secondary'
    ? css`
        background: var(--colors-secondary, ${theme.colors.secondary});
      `
    : variant === 'outline'
    ? css`
        background: transparent;
      `
    : // Default
      css`
        background: var(--colors-primary, ${theme.colors.primary});
      `;

export const getButtonVariantTextColor = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        color: var(--colors-text-on-error, ${theme.colors.textOnError});
      `
    : variant === 'primary'
    ? css`
        color: var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
      `
    : variant === 'secondary'
    ? css`
        color: var(--colors-text-on-secondary, ${theme.colors.textOnSecondary});
      `
    : variant === 'outline'
    ? css`
        color: var(--colors-text-on-outline, ${theme.colors.text});
      `
    : css`
        color: var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
      `;

export const getButtonVariantSVGColor = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        fill: var(--colors-svg-on-error, ${theme.colors.textOnError});
      `
    : variant === 'primary'
    ? css`
        fill: var(--colors-svg-on-primary, ${theme.colors.textOnPrimary});
      `
    : variant === 'secondary'
    ? css`
        fill: var(--colors-svg-on-secondary, ${theme.colors.textOnSecondary});
      `
    : variant === 'outline'
    ? css`
        fill: var(--colors-svg-on-outline, ${theme.colors.text});
      `
    : // Default
      css`
        fill: var(--colors-svg-on-primary, ${theme.colors.textOnPrimary});
      `;

// @TODO: Implement Hover styles
// export const getButtonVariantTextColorHover = ({ theme, variant }) =>
//   variant === 'error'
//     ? css`
//         color: var(--colors-text-on-error, ${theme.colors.textOnError});
//       `
//     : variant === 'primary'
//     ? css`
//         color: var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
//       `
//     : variant === 'secondary'
//     ? css`
//         color: var(--colors-text-on-secondary, ${theme.colors.textOnSecondary});
//       `
//     : css`
//         color: var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
//       `;

export const primaryButtonStyles = ({ theme }) => css`
  ${getButtonVariantBgColor};
  ${getButtonVariantTextColor};
  border: 0;

  svg {
    ${getButtonVariantSVGColor};
  }
  &:hover {
    svg {
      fill: var(--colors-text-on-primary, ${theme.colors.textOnPrimaryDark});
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px white,
      0 0 0 4px var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
    outline: none;
  }
`;

export const secondaryButtonStyles = ({ theme }) => css`
  ${getButtonVariantBgColor};
  ${getButtonVariantTextColor};
  border: 0;

  svg {
    ${getButtonVariantSVGColor};
  }
  &:hover {
    svg {
      fill: var(
        --colors-text-on-secondary,
        ${theme.colors.textOnSecondaryDark}
      );
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px white,
      0 0 0 4px var(--colors-text-on-secondary, ${theme.colors.textOnSecondary});
    outline: none;
  }
`;

export const outlineButtonStyles = ({ noHover, theme }) => css`
  ${getButtonVariantBgColor};
  ${getButtonVariantTextColor};
  border: 2px solid var(--colors-primary, ${theme.colors.primary});

  svg {
    ${getButtonVariantSVGColor};
  }

  ${!noHover &&
  css`
    &:focus,
    &:hover {
      background: var(--colors-primary, ${theme.colors.primary});
      color: white;
      svg {
        fill: var(--colors-primary, ${theme.colors.textOnPrimary});
      }
    }
  `}
`;

export const buttonVariantStyles = ({ variant }) => {
  switch (variant) {
    case 'primary': {
      return primaryButtonStyles;
    }
    case 'secondary': {
      return secondaryButtonStyles;
    }
    case 'outline': {
      return outlineButtonStyles;
    }
    default: {
      return primaryButtonStyles;
    }
  }
};

export const squaredButtonStyles = ({ theme }) => css`
  border-radius: ${theme.radii[1]}px;
`;
export const regularButtonStyles = ({ theme }) => css`
  border-radius: ${theme.radii[2]}px;
`;
export const roundedButtonStyles = ({ theme }) => css`
  border-radius: ${theme.radii[3]}px;
`;
export const roundButtonStyles = ({ theme }) => css`
  border-radius: ${theme.radii[theme.radii.length - 1]}px;
`;

export const buttonShapeStyles = ({ shape }) => {
  switch (shape) {
    case 'squared': {
      return squaredButtonStyles;
    }
    case 'regular': {
      return regularButtonStyles;
    }
    case 'rounded': {
      return roundedButtonStyles;
    }
    case 'round': {
      return roundButtonStyles;
    }
    default: {
      return regularButtonStyles;
    }
  }
};

export const smallButtonStyles = () => css`
  height: 32px;
  padding: 0 0.5rem;
`;
export const mediumButtonStyles = () => css`
  height: 40px;
  padding: 0.5rem 1.2rem;
`;
export const largeButtonStyles = () => css`
  height: 48px;
  padding: 0.5rem 1.2rem;
`;

export const buttonSizeStyles = ({ size }) => {
  switch (size) {
    case 'sm': {
      return smallButtonStyles;
    }
    case 'md': {
      return mediumButtonStyles;
    }
    case 'lg': {
      return largeButtonStyles;
    }
    default: {
      return mediumButtonStyles;
    }
  }
};

export const buttonTypographyStyles = ({ typography }) => {
  switch (typography) {
    case 'serif': {
      return serifStyles;
    }
    case 'sans-serif': {
      return sansSerifStyles;
    }
    case 'mono': {
      return monoStyles;
    }
    default: {
      return sansSerifStyles;
    }
  }
};
