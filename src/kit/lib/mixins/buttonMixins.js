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
  appearance: none;
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
        background: var(
          --color-error,
          ${theme.colors.alert || theme.colors.error || 'red'}
        );
      `
    : variant === 'inactive'
    ? css`
        background: var(--color-inactive, ${theme.colors.inactive});
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
    : variant === 'ghost'
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
    : variant === 'inactive'
    ? css`
        color: var(
          --color-text-on-inactive,
          ${theme.colors.textOnInactive || '#44475a'}
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
        color: var(--color-text-on-outline, ${theme.colors.text || '#333644'});
      `
    : variant === 'ghost'
    ? css`
        color: var(--color-text-on-ghost, ${theme.colors.text || '#333644'});
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
        fill: var(--color-svg-on-outline, ${theme.colors.text || '#333644'});
      `
    : variant === 'ghost'
    ? css`
        fill: var(--color-svg-on-ghost, ${theme.colors.text || '#333644'});
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
  border: var(--border-button-width, 2px) solid
    var(--color-primary, ${theme.colors.primary});

  svg {
    ${getButtonVariantSVGColor};
  }

  ${!noHover &&
  css`
    &:focus,
    &:hover {
      background: var(--color-outline-hover, ${
        theme.colors.outlineHover || `rgba(0, 0, 0, 0.25)`
      });
     
      color: fill: var(--color-text-on-outline-hover, #333644);
      svg {
        fill: var(--color-svg-on-outline-hover, #333644);
      }
    }
  `}
`;
export const ghostButtonStyles = ({ noHover, theme }) => css`
  ${getButtonVariantBgColor};
  ${getButtonVariantTextColor};
  border: 0;

  svg {
    ${getButtonVariantSVGColor};
  }

  ${!noHover &&
  css`
    &:focus,
    &:hover {
      background: var(
        --color-ghost-hover,
        ${theme.colors.ghostHover || `rgba(184,56,240, 0.125)`}
      );

      color: var(--color-text-on-ghost-hover);
      svg {
        fill: var(--color-svg-on-ghost-hover);
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
    case 'ghost': {
      return ghostButtonStyles;
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
        border-radius: ${`var(--radius-button-round, ${theme.radii.full})`};
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
  height,
  padding,
  p,
  size,
  theme,
  width,
}) => {
  let normalizedPadding;
  let normalizedFontSize;
  let normalizedHeight;
  const normalizedWidth = width ?? 'auto';

  switch (size) {
    case 'sm':
      normalizedFontSize = `var(--font-size-button-sm, ${
        theme.fontSizes.caption || 14
      }px)`;
      normalizedHeight =
        height ||
        `var(--height-button-sm, ${theme.input?.heights?.sm || 24}px)`;
      normalizedPadding = (padding || p) ?? '4px';
      break;

    case 'md':
      normalizedFontSize = `var(--font-size-button, ${
        theme.fontSizes.button || 16
      }px)`;
      normalizedHeight =
        height || `var(--height-button, ${theme.input?.heights?.md || 32}px)`;
      normalizedPadding = (padding || p) ?? '4px';
      break;

    case 'lg':
      normalizedFontSize = `var(--font-size-button-lg, ${
        theme.fontSizes.button || 16
      }px)`;
      normalizedHeight =
        height || `var(--height-button, ${theme.input?.heights?.lg || 42}px)`;
      normalizedPadding = (padding || p) ?? '8px';
      break;

    case 'xl':
      normalizedFontSize = `var(--font-size-button-lg, ${
        theme.fontSizes.lg || 16
      }px)`;
      normalizedHeight =
        height || `var(--height-button, ${theme.input?.heights?.xl || 48}px)`;
      normalizedPadding = (padding || p) ?? '12px';
      break;

    default:
      normalizedFontSize = `var(--font-size-button, ${
        theme.fontSizes.button || 16
      }px)`;
      normalizedHeight =
        height || `var(--height-button, ${theme.input?.heights?.md || 32}px)`;
      normalizedPadding = (padding || p) ?? '4px';
      break;
  }

  return css`
    * {
      font-size: ${normalizedFontSize};
    }
    height: ${normalizedHeight};
    min-height: ${normalizedHeight};
    padding: ${normalizedPadding};
    min-width: ${normalizedWidth};
  `;
};

/**
 * END Size Mixins
 *
 */
