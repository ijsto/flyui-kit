import React from 'react';
import styled from 'styled-components';
import { space as systemSpace } from 'styled-system';

import Box from './Box';

export const StyledSlack = styled(Box)`
  display: flex;
  /* @TODO: Review wrapping. */
  flex-wrap: wrap;
  padding: 0.25rem 0;
  ${systemSpace};
`;

const Slack = ({ children, center = false, space, ...rest }) => (
  <StyledSlack
    alignItems={rest.direction || (center && 'center')}
    justifyContent={rest.direction || (center && 'center')}
    flexDirection={rest.direction}
    gridGap={space}
    {...rest}
  >
    {children}
  </StyledSlack>
);

Slack.defaultProps = {
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

export default Slack;
