import { css } from 'styled-components';

export const serifStyles = ({ theme }) => css`
  font-family: var(--font-serif, ${theme.fonts.serif});
`;
export const sansSerifStyles = ({ theme }) => css`
  font-family: var(--font-sans-serif, ${theme.fonts.sansSerif});
`;
export const monoStyles = ({ theme }) => css`
  font-family: var(--font-mono, ${theme.fonts.mono});
`;
