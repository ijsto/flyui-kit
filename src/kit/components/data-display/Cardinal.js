import React from 'react';
import styled, { css } from 'styled-components';

import Text from './Text';
import Box from '../layout/Box';

const StyledCardinal = styled(Box)`
  ${({ transform }) =>
    css`
      text-transform: ${transform};
    `}
`;

const Cardinal = ({ align = 'left', children, body, head, size }) => (
  <StyledCardinal display="inline-block" textAlign={align}>
    <Text
      fontSize={
        size === 'sm' ? 1 : size === 'md' ? 3 : size === 'lg' ? 5 : size
      }
      mb={0}
      pb={1}
      variant="eyebrow"
    >
      {head}
    </Text>

    <Text variant="caption">{body}</Text>
    {children}
  </StyledCardinal>
);

export default Cardinal;
