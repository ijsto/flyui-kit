import { css } from 'styled-components';

// iJS

export const getTagVariantBgColor = ({ theme, variant }) =>
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

export const getTagVariantTextColor = ({ theme, variant }) =>
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

export const getTagVariantSVGColor = ({ theme, variant }) =>
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
// export const getTagVariantTextColorHover = ({ theme, variant }) =>
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

export const primaryTagStyles = ({ isHoverable, theme }) => css`
  ${getTagVariantBgColor};
  ${getTagVariantTextColor};
  border: 0;

  svg {
    ${getTagVariantSVGColor};
  }

  ${isHoverable &&
  css`
    &:hover {
      background: var(--colors-primary-dark, ${theme.colors.primaryDark});
      svg {
        fill: var(--colors-text-on-primary, ${theme.colors.textOnPrimaryDark});
      }
    }
  `}

  &:focus {
    box-shadow: 0 0 0 2px white,
      0 0 0 4px var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
    outline: none;
  }
`;

export const secondaryTagStyles = ({ theme }) => css`
  ${getTagVariantBgColor};
  ${getTagVariantTextColor};
  border: 0;

  svg {
    ${getTagVariantSVGColor};
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

export const outlineTagStyles = ({ theme }) => css`
  ${getTagVariantBgColor};
  ${getTagVariantTextColor};
  border: 2px solid var(--colors-primary, ${theme.colors.primary});

  svg {
    ${getTagVariantSVGColor};
  }

  &:focus,
  &:hover {
    background: var(--colors-primary, ${theme.colors.primaryDark});
    color: white;
    svg {
      fill: var(--colors-primary, ${theme.colors.textOnPrimary});
    }
  }
`;

export const tagVariantStyles = ({ variant }) => {
  switch (variant) {
    case 'primary': {
      return primaryTagStyles;
    }
    case 'secondary': {
      return secondaryTagStyles;
    }
    case 'outline': {
      return outlineTagStyles;
    }
    default: {
      return primaryTagStyles;
    }
  }
};

export const squaredTagStyles = ({ theme }) => css`
  border-radius: ${theme.radii[1]}px;
`;
export const regularTagStyles = ({ theme }) => css`
  border-radius: ${theme.radii[2]}px;
`;
export const roundedTagStyles = ({ theme }) => css`
  border-radius: ${theme.radii[3]}px;
`;
export const roundTagStyles = ({ theme }) => css`
  border-radius: ${theme.radii[theme.radii.length - 1]}px;
`;

export const tagShapeStyles = ({ shape }) => {
  switch (shape) {
    case 'squared': {
      return squaredTagStyles;
    }
    case 'regular': {
      return regularTagStyles;
    }
    case 'rounded': {
      return roundedTagStyles;
    }
    case 'round': {
      return roundTagStyles;
    }
    default: {
      return regularTagStyles;
    }
  }
};

export const smallTagStyles = ({ theme }) => css`
  height: 22px;
  padding: 0 6px;
  svg {
    height: calc(${theme.fontSizes.caption} - 2px);
    width: calc(${theme.fontSizes.caption} - 2px);
  }
`;
export const mediumTagStyles = ({ theme }) => css`
  height: 28px;
  padding: 0 8px;
  svg {
    height: calc(${theme.fontSizes.caption} - 2px);
    width: calc(${theme.fontSizes.caption} - 2px);
  }
`;
export const largeTagStyles = ({ theme }) => css`
  height: 32px;
  padding: 2px 12px;
  svg {
    height: calc(${theme.fontSizes.body} - 2px);
    width: calc(${theme.fontSizes.body} - 2px);
  }
`;

export const tagSizeStyles = ({ size }) => {
  switch (size) {
    case 'sm': {
      return smallTagStyles;
    }
    case 'md': {
      return mediumTagStyles;
    }
    case 'lg': {
      return largeTagStyles;
    }
    default: {
      return mediumTagStyles;
    }
  }
};

export const tagTypographyStyles = ({ typography, theme }) => css`
  font-family: ${theme.fonts[typography]};
`;
