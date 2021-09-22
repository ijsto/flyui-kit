import { css } from 'styled-components';

// Core Stacks
export const monoFontStack = 'Courier New, sans-serif';
export const sansSerifFontStack = 'Avant Garde, sans-serif';
export const fancyFontStack = 'Brush Script MT, sans-serif';
export const serifFontStack = 'Cambria, serif';
export const boldSerifFontStack = 'Cambria, serif';

// Global UI Stacks
export const buttonFontStack = sansSerifFontStack;
export const captionTextFontStack = sansSerifFontStack;
export const headingFontStack = serifFontStack;
export const inputFontStack = sansSerifFontStack;

export const serifStyles = () => css`
  font-family: ${serifFontStack};
`;
export const sansSerifStyles = () => css`
  font-family: ${sansSerifFontStack};
`;
export const monoStyles = () => css`
  font-family: ${monoFontStack};
`;
