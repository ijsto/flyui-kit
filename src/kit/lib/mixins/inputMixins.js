import { css } from 'styled-components';

export const inputActiveStyles = ({ theme }) => css`
  border-color: ${theme.colors.text};
`;
export const inputDisabledStyles = ({ theme }) => css`
  border-color: ${theme.colors.disabled || 'rgba(77, 77, 77, 0.7)'};
  background-color: ${theme.colors.disabled ||
  'rgba(255,255,255,0.5)'} !important;
  color: ${theme.colors.disabled || 'rgba(77, 77, 77, 0.7)'};
  cursor: not-allowed !important;

  svg {
    fill: ${theme.colors.disabled || 'rgba(77, 77, 77, 0.7)'};
  }
`;
export const inputErrorStyles = ({ theme }) => css`
  border-color: ${theme.colors.error};
  color: ${theme.colors.error};
`;

export const inputFocusStyles = ({ theme }) => css`
  transition: box—shadow 0.2s ease !important;
  box-shadow: 0 0 0 2px ${theme.colors.background},
    0 0 0 4px ${theme.colors.text};
  outline: none;
`;

export const inputHoverStyles = ({ theme }) => css`
  border-color: ${theme.colors.primary};
`;

export const inputTextStyles = ({ theme }) => css`
  color: ${theme.colors.text};
`;

export const inputIconPadding = ({ icon, size }) => {
  const textSize =
    size === 'sm'
      ? '12px'
      : size === 'md'
      ? '16px'
      : size === 'lg'
      ? '16px'
      : '16px';

  return css`
    ${icon &&
    css`
      padding-left: calc(${textSize} * 2);
    `}
  `;
};

/**
 * Shape Mixins
 *
 */

export const inputShapeStyles = ({ shape, theme }) => {
  switch (shape) {
    case 'square': {
      return css`
        border-radius: ${`var(--input-radius-square, ${theme.input.radius.square}px)`};
      `;
    }
    case 'squared': {
      return css`
        border-radius: ${`var(--input-radius-sm, ${theme.input.radius.sm}px)`};
      `;
    }
    case 'regular': {
      return css`
        border-radius: ${`var(--input-radius, ${theme.input.radius.md}px)`};
      `;
    }
    case 'rounded': {
      return css`
        border-radius: ${`var(--input-radius-lg, ${theme.input.radius.lg}px)`};
      `;
    }
    case 'round': {
      return css`
        border-radius: ${`var(--input-radius-round, ${theme.input.radius.round}px)`};
      `;
    }
    default: {
      return css`
        border-radius: ${`var(--input-radius, ${theme.input.radius.md}px)`};
      `;
    }
  }
};

/**
 * END Shape Mixins
 *
 */

const inputSizeStyles = ({ size, theme }) => {
  switch (size) {
    case 'sm':
      return css`
        height: ${`var(--input-height-sm, ${
          theme.input?.heights?.sm || 24
        }px)`};
        padding: 2px 4px;
      `;
    case 'md':
      return css`
        height: ${`var(--input-height, ${theme.input?.heights?.md || 32}px)`};
        padding: 4px 6px;
      `;
    case 'lg':
      return css`
        height: ${`var(--input-height-lg, ${
          theme.input?.heights?.lg || 42
        }px)`};
        padding: 4px 8px;
      `;

    default:
      return css`
        height: ${`var(--input-height, ${theme.input?.heights?.md || 32}px)`};
        padding: 4px 6px;
      `;
  }
};

export const inputContainerStyles = ({ invalid, disabled, theme }) => css`
  appearance: textfield;
  background: var(--input-background, none);
  border-style: var(--border-input-style, solid);
  border-color: var(--border-input-color, ${theme.colors.border || '#333666'});
  border-width: var(--border-input-width, 2px);
  box-sizing: border-box;
  max-width: 100%;
  outline: none;
  width: ${({ width }) => width || '100%'};
  transition: all
    ${({ theme: { transition } }) =>
      `${transition.speed.fast} ${transition.animation}`};

  ${inputShapeStyles};
  ${inputTextStyles};
  ${inputSizeStyles};
  ${inputIconPadding};

  ${invalid && inputErrorStyles};

  &:active {
    ${!invalid && inputActiveStyles};
  }
  &:focus {
    ${!invalid && inputFocusStyles};
  }
  &:disabled {
    ${inputDisabledStyles};
  }

  &:hover {
    ${!invalid && !disabled && inputHoverStyles};
  }
`;

export const inputTextInputStyles = ({ theme }) => css`
  ${inputContainerStyles};
  font-family: ${theme.fonts.input};
  font-size: ${theme.fontSizes.caption};
  line-height: 1.3;
  &:disabled {
    color: grey;
  }
  &::placeholder {
    color: ${theme.colors.placeholder};
  }
`;
