import React from 'react';
import styled from 'styled-components';
import { space as systemSpace } from 'styled-system';

import Box from './Box';

export const StyledStack = styled(Box)`
  display: flex;
  /* @TODO: Review wrapping. */
  flex-wrap: wrap;
  ${systemSpace};
`;

const Stack = ({ children, center = false, space, ...rest }) => (
  <StyledStack
    alignItems={rest.direction || (center && 'center')}
    justifyContent={rest.direction || (center && 'center')}
    flexDirection={rest.direction}
    gridGap={space}
    {...rest}
  >
    {children}
  </StyledStack>
);

Stack.defaultProps = {
  // Short hand to center elements within the stack
  center: false,
  direction: 'column',
  // In most cases would not change. Only change if explicitly want to force something out of screen.
  maxWidth: '100%',
  minWidth: null,
  space: 2,
  // Define explicit width.
  width: null,
};

export default Stack;
