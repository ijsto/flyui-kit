import React from 'react';
import styled from 'styled-components';

import Box from './Box';

const StyledScrollbarControlBox = styled(Box)`
  /* These need to be transparent so they don't show bits of scrollbar
    elements in random places where there's overflow: scroll
     */
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* width */
  ::-webkit-scrollbar {
    width: ${({ width, theme }) => width || theme.space[1]}px;
    height: ${({ height, theme }) => height || theme.space[1] || 9}px;
    background-color: transparent;
    outline: none;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ bg, theme }) =>
      bg || theme.colors.background || '#f1f1f1'};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ thumbColor, theme }) =>
      thumbColor ||
      theme.colors.primary ||
      'linear-gradient(45deg, rgb(184, 56, 240), rgb(56, 184, 240))'};
    border-radius: ${({ theme }) => theme.radii[1] || 4}px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ thumbColorHover, theme }) =>
      thumbColorHover ||
      theme.colors.secondary ||
      'linear-gradient(45deg, rgb(56, 184, 240), rgb(184, 56, 240))'};
  }
`;

export const ScrollbarControlBox = ({ children, ...rest }) => (
  <StyledScrollbarControlBox overflow="auto" {...rest}>
    {children}
  </StyledScrollbarControlBox>
);
