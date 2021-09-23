import React from 'react';
import styled from 'styled-components';
import {
  border,
  borderRadius,
  color,
  flexbox,
  layout,
  grid,
  space,
  position,
  typography,
} from 'styled-system';

const StyledBox = styled.div`
  ${border};
  ${borderRadius};
  ${color};
  ${flexbox};
  ${grid};
  ${space};
  ${layout};
  ${position};
  ${typography};
`;

const Box = ({ children, ...rest }) => (
  <StyledBox {...rest}>{children}</StyledBox>
);

export default Box;
