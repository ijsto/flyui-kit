import { css } from 'styled-components';
import { space, layout } from 'styled-system';
import { inputFocusStyles } from './inputMixins';

// iJS

export const liftHigh = () => css`
  transform: translateY(-9%);
`;
export const liftMedium = () => css`
  transform: translateY(-5%);
`;
export const liftLow = () => css`
  transform: translateY(-3%);
`;

export const shadowLargeStyles = () => css`
  box-shadow: ${({ theme }) => theme.shadows.large};
`;
export const shadowMediumStyles = () => css`
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;
export const shadowSmallStyles = () => css`
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

/**
 * Hover Animation Mixins
 *
 */

export const buttonHoverEffectsStyles = ({ hoverEffects }) => css`
  ${hoverEffects &&
  (hoverEffects.includes('lift-medium')
    ? liftMedium
    : hoverEffects.includes('lift-high')
    ? liftHigh
    : hoverEffects.includes('lift-low')
    ? liftLow
    : hoverEffects.includes('lift') && liftMedium)}

  ${hoverEffects &&
  (hoverEffects.includes('shadow-large')
    ? shadowLargeStyles
    : hoverEffects.includes('shadow-medium')
    ? shadowMediumStyles
    : hoverEffects.includes('shadow-small')
    ? shadowSmallStyles
    : hoverEffects.includes('shadow') && shadowMediumStyles)}
`;
/**
 * END Hover Animation Mixins
 *
 */

/**
 * Hover Mixins
 *
 */

export const buttonHoverColorStyles = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        background: var(--color-error-hover, ${theme.colors.errorHover});
        color: var(--color-text-on-error, ${theme.colors.textOnError});
      `
    : variant === 'primary'
    ? css`
        background: var(--color-primary-hover, ${theme.colors.primaryHover});
        color: var(--color-text-on-primary, ${theme.colors.textOnPrimary});
      `
    : variant === 'secondary'
    ? css`
        background: var(
          --colors-secondary-hover,
          ${theme.colors.secondaryHover}
        );
        color: var(--color-text-on-secondary, ${theme.colors.textOnSecondary});
      `
    : css`
        background: var(--color-primary-hover, ${theme.colors.primaryHover});
        color: var(--color-text-on-primary, ${theme.colors.textOnPrimary});
      `;
/**
 * END State Mixins
 *
 */

/**
 * Transition Mixins
 *
 */

export const buttonTransitionStyles = ({ theme }) =>
  css`
    transition: all
      ${`${theme.transition?.speed?.medium} ${theme.transition?.animation}`};
  `;
/**
 * END Transition Mixins
 *
 */

export const buttonBaseStyles = ({ typography, theme }) => css`
  ${layout};
  ${space};
  box-sizing: border-box;
  cursor: pointer;
  font-weight: var(--button-text-weight, bold);
  font-family: var(
    --button-font-stack,
    ${theme.fonts[typography || 'button'] || 'inherit'}
  );
  text-decoration: none;

  ${buttonTransitionStyles}

  &:focus {
    ${inputFocusStyles}
  }
`;

/**
 * Variant Mixins
 *
 */

export const getButtonVariantBgColor = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        background: var(--color-primary, ${theme.colors.primary});
      `
    : variant === 'primary'
    ? css`
        background: var(--color-primary, ${theme.colors.primary});
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
        background: var(--color-primary, ${theme.colors.primary});
      `;

export const getButtonVariantTextColor = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        color: var(
          --color-text-on-error,
          ${theme.colors.textOnError || '#FFF'}
        );
      `
    : variant === 'primary'
    ? css`
        color: var(
          --color-text-on-primary,
          ${theme.colors.textOnPrimary || '#FFF'}
        );
      `
    : variant === 'secondary'
    ? css`
        color: var(
          --color-text-on-secondary,
          ${theme.colors.textOnSecondary || '#FFF'}
        );
      `
    : variant === 'outline'
    ? css`
        color: var(--color-text-on-outline, ${theme.colors.text || '#333666'});
      `
    : css`
        color: var(
          --color-text-on-primary,
          ${theme.colors.textOnPrimary || '#FFF'}
        );
      `;

export const getButtonVariantSVGColor = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        fill: var(--color-svg-on-error, ${theme.colors.textOnError || '#FFF'});
      `
    : variant === 'primary'
    ? css`
        fill: var(
          --color-svg-on-primary,
          ${theme.colors.textOnPrimary || '#FFF'}
        );
      `
    : variant === 'secondary'
    ? css`
        fill: var(
          --color-svg-on-secondary,
          ${theme.colors.textOnSecondary || '#FFF'}
        );
      `
    : variant === 'outline'
    ? css`
        fill: var(--color-svg-on-outline, ${theme.colors.text || '#333666'});
      `
    : // Default
      css`
        fill: var(
          --color-svg-on-primary,
          ${theme.colors.textOnPrimary || '#FFF'}
        );
      `;

export const primaryButtonStyles = ({ theme }) => css`
  ${getButtonVariantBgColor};
  ${getButtonVariantTextColor};
  border: 0;

  svg {
    ${getButtonVariantSVGColor};
  }
  &:hover {
    svg {
      fill: var(
        --color-text-on-primary,
        ${theme.colors.textOnPrimaryDark || '#FFF'}
      );
    }
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
      fill: var(--color-text-on-secondary, ${theme.colors.textOnSecondaryDark});
    }
  }
`;

export const outlineButtonStyles = ({ noHover, theme }) => css`
  ${getButtonVariantBgColor};
  ${getButtonVariantTextColor};
  border: 2px solid var(--color-primary, ${theme.colors.primary});

  svg {
    ${getButtonVariantSVGColor};
  }

  ${!noHover &&
  css`
    &:focus,
    &:hover {
      background: var(--color-primary, ${theme.colors.primary});
      color: white;
      svg {
        fill: var(--color-primary, ${theme.colors.textOnPrimary});
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

/**
 * END Variant Mixins
 *
 */

/**
 * Shape Mixins
 *
 */

export const buttonShapeStyles = ({ shape, theme }) => {
  switch (shape) {
    case 'square': {
      return css`
        border-radius: ${`var(--radius-button-square, ${theme.input.radius.square}px)`};
      `;
    }
    case 'squared': {
      return css`
        border-radius: ${`var(--radius-button-sm, ${theme.input.radius.sm}px)`};
      `;
    }
    case 'regular': {
      return css`
        border-radius: ${`var(--radius-button, ${theme.input.radius.md}px)`};
      `;
    }
    case 'rounded': {
      return css`
        border-radius: ${`var(--radius-button-lg, ${theme.input.radius.lg}px)`};
      `;
    }
    case 'round': {
      return css`
        border-radius: ${`var(--radius-button-round, ${theme.input.radius.round}px)`};
      `;
    }
    default: {
      return css`
        border-radius: ${`var(--radius-button, ${theme.input.radius.md}px)`};
      `;
    }
  }
};

/**
 * END Shape Mixins
 *
 */

/**
 * Size Mixins
 *
 */

export const buttonSizeStyles = ({
  height = '48px',
  padding,
  p,
  size,
  theme,
}) => {
  const normalizedPadding = padding || p;

  switch (size) {
    case 'sm':
      return css`
        * {
          font-size: ${`var(--font-size-button-sm, ${theme.fontSizes.caption}px)`};
        }
        height: ${height ||
        `var(--height-button-sm, ${theme.input?.heights?.sm || 24}px)`};
        padding: ${normalizedPadding ?? '2px'};
      `;
    case 'md':
      return css`
        * {
          font-size: ${`var(--font-size-button-md, ${theme.fontSizes.button}px)`};
        }
        height: ${height ||
        `var(--height-button, ${theme.input?.heights?.md || 32}px)`};
        padding: ${normalizedPadding ?? '4px'};
      `;
    case 'lg':
      return css`
        * {
          font-size: ${`var(--font-size-button-lg, ${theme.fontSizes.button}px)`};
        }
        height: ${height ||
        `var(--height-button-lg, ${theme.input?.heights?.lg || 42}px)`};
        padding: ${normalizedPadding ?? '8px'};
      `;
    case 'xl':
      return css`
        * {
          font-size: ${`var(--font-size-button-xl, ${theme.fontSizes.h3}px)`};
        }
        height: ${height ||
        `var(--height-button-xl, ${theme.input?.heights?.xl || 48}px)`};
        padding: ${normalizedPadding ?? '12px'};
      `;

    default:
      return css`
        font-size: ${`var(--font-size-button, ${theme.fontSizes.button}px)`};
        height: ${height ||
        `var(--height-button, ${theme.input?.heights?.md || 32}px)`};
        padding: ${normalizedPadding ?? '2px'};
      `;
  }
};

/**
 * END Size Mixins
 *
 */
