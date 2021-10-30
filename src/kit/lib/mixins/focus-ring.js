import { css } from 'styled-components';

export const focusRing = ({ theme }) =>
  css`
    outline: none;
    box-shadow: ${theme.colors.surface} 0px 0px 0px 4px,
      ${theme.colors.text} 0px 0px 0px 6px;
  `;
