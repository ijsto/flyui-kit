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

export const inputIconPadding = ({ icon, textSize }) => css`
  padding-left: calc(${icon && textSize} * 2);
`;

const inputContainerSizePaddingStyles = ({ textSize }) => css`
  padding: calc(${textSize} / 2);
`;

export const inputContainerStyles = ({ invalid, theme }) => css`
  appearance: textfield;
  background: none;
  background: ${theme.colors.trueWhite};
  border: 1px solid;
  border-color: ${theme.colors.inactive};
  border-radius: ${theme.radius.md}px;
  max-width: 100%;
  outline: none;
  width: ${({ width }) => width || '100%'};
  transition: all
    ${({ theme: { transition } }) =>
      `${transition.speed.fast} ${transition.animation}`};

  ${inputTextStyles};
  ${inputContainerSizePaddingStyles};
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
