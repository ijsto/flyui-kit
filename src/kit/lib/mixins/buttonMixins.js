import { css } from 'styled-components';
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
        background: var(--colors-error-hover, ${theme.colors.errorHover});
        color: var(--colors-text-on-error, ${theme.colors.textOnError});
      `
    : variant === 'primary'
    ? css`
        background: var(--colors-primary-hover, ${theme.colors.primaryHover});
        color: var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
      `
    : variant === 'secondary'
    ? css`
        background: var(
          --colors-secondary-hover,
          ${theme.colors.secondaryHover}
        );
        color: var(--colors-text-on-secondary, ${theme.colors.textOnSecondary});
      `
    : css`
        background: var(--colors-primary-hover, ${theme.colors.primaryHover});
        color: var(--colors-text-on-primary, ${theme.colors.textOnPrimary});
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
  cursor: pointer;
  font-weight: var(--button-text-weight, bold);

  font-family: var(
    --button-font-stack,
    ${theme.fonts[typography || 'button'] || 'inherit'}
  );

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
        color: var(
          --colors-text-on-error,
          ${theme.colors.textOnError || '#FFF'}
        );
      `
    : variant === 'primary'
    ? css`
        color: var(
          --colors-text-on-primary,
          ${theme.colors.textOnPrimary || '#FFF'}
        );
      `
    : variant === 'secondary'
    ? css`
        color: var(
          --colors-text-on-secondary,
          ${theme.colors.textOnSecondary || '#FFF'}
        );
      `
    : variant === 'outline'
    ? css`
        color: var(--colors-text-on-outline, ${theme.colors.text || '#333666'});
      `
    : css`
        color: var(
          --colors-text-on-primary,
          ${theme.colors.textOnPrimary || '#FFF'}
        );
      `;

export const getButtonVariantSVGColor = ({ theme, variant }) =>
  variant === 'error'
    ? css`
        fill: var(--colors-svg-on-error, ${theme.colors.textOnError || '#FFF'});
      `
    : variant === 'primary'
    ? css`
        fill: var(
          --colors-svg-on-primary,
          ${theme.colors.textOnPrimary || '#FFF'}
        );
      `
    : variant === 'secondary'
    ? css`
        fill: var(
          --colors-svg-on-secondary,
          ${theme.colors.textOnSecondary || '#FFF'}
        );
      `
    : variant === 'outline'
    ? css`
        fill: var(--colors-svg-on-outline, ${theme.colors.text || '#333666'});
      `
    : // Default
      css`
        fill: var(
          --colors-svg-on-primary,
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
        --colors-text-on-primary,
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
      fill: var(
        --colors-text-on-secondary,
        ${theme.colors.textOnSecondaryDark}
      );
    }
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
    case 'squared': {
      return css`
        border-radius: ${`var(--button-squared-radius, ${theme.radius.input.squared}px)`};
      `;
    }
    case 'regular': {
      return css`
        border-radius: ${`var(--button-radius, ${theme.radius.input.regular}px)`};
      `;
    }
    case 'rounded': {
      return css`
        border-radius: ${`var(--button-rounded-radius, ${theme.radius.input.rounded}px)`};
      `;
    }
    case 'round': {
      return css`
        border-radius: ${`var(--button-round-radius, ${theme.radius.input.round}px)`};
      `;
    }
    default: {
      return css`
        border-radius: ${`var(--button-radius, ${theme.radius.input.regular}px)`};
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

export const buttonSizeStyles = ({ size }) => {
  switch (size) {
    case 'sm':
      return css`
        height: 24px;
        padding: 2px;
      `;
    case 'md':
      return css`
        height: 32px;
        padding: 4px;
      `;
    case 'lg':
      return css`
        height: 42px;
        padding: 8px;
      `;

    default:
      return css`
        height: 32px;
        padding: 2px;
      `;
  }
};

/**
 * END Size Mixins
 *
 */
