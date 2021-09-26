import { css } from 'styled-components';

export const inputActiveStyles = ({ theme }) => css`
  border-color: ${theme.colors.text};
`;
export const inputDisabledStyles = ({ theme }) => css`
  border: ${theme.colors.neutral} solid 2px !important;
  background-color: ${theme.colors.neutral} !important;
  cursor: not-allowed !important;
  opacity: 0.35 !important;
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
      ? '24px'
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
        border-radius: ${`var(--input-radius, ${theme.radius.input.max}px)`};
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

export const inputContainerStyles = ({ invalid, theme }) => css`
  appearance: textfield;
  background: var(--input-background, none);
  border: 1px solid;
  border-color: ${theme.colors.inactive};
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
    ${!invalid && inputHoverStyles};
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
