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
    case 'squared': {
      return css`
        border-radius: ${`var(--input-squared-radius, ${theme.radius.input.squared}px)`};
      `;
    }
    case 'regular': {
      return css`
        border-radius: ${`var(--input-radius, ${theme.radius.input.regular}px)`};
      `;
    }
    case 'rounded': {
      return css`
        border-radius: ${`var(--input-rounded-radius, ${theme.radius.input.rounded}px)`};
      `;
    }
    case 'round': {
      return css`
        border-radius: ${`var(--input-round-radius, ${theme.radius.input.round}px)`};
      `;
    }
    default: {
      return css`
        border-radius: ${`var(--input-radius, ${theme.radius.input.regular}px)`};
      `;
    }
  }
};

/**
 * END Shape Mixins
 *
 */

const inputSizeStyles = ({ size }) => {
  switch (size) {
    case 'sm':
      return css`
        height: 24px;
        padding: 2px 4px;
      `;
    case 'md':
      return css`
        height: 32px;
        padding: 4px 6px;
      `;
    case 'lg':
      return css`
        height: 42px;
        padding: 4px 8px;
      `;

    default:
      return css`
        height: 32px;
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

export const inputTextInputStyles = ({ textSize, theme }) => css`
  ${inputContainerStyles};
  font-family: ${theme.fonts.input};
  font-size: ${textSize};
  line-height: 1.3;
  &:disabled {
    color: grey;
  }
  &::placeholder {
    color: ${theme.colors.placeholder};
  }
`;
