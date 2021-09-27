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

const Cardinal = ({
  align = 'left',
  children,
  body,
  bodyVariant = 'caption',
  head,
  headVariant = 'eyebrow',
  // size,
}) => (
  <StyledCardinal display="inline-block" textAlign={align}>
    <Text mb={0} pb={1} variant={headVariant}>
      {head}
    </Text>

    <Text mb={0} pb={1} variant={bodyVariant}>
      {body}
    </Text>
    {children}
  </StyledCardinal>
);

export default Cardinal;
