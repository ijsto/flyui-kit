import React, { forwardRef } from 'react';

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

const Box = forwardRef(({ children, ...rest }, ref) => (
  <StyledBox ref={ref} {...rest}>
    {children}
  </StyledBox>
));

export default Box;
