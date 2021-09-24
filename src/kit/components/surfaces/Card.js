import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';

export const StyledCard = styled(Box)`
  /* @TODO: handle different Card radius sizes */
  border-radius: var(--card-radius, ${({ theme }) => theme.radius.md});
`;

const Card = ({ bg, children, toolbar, ...rest }) => (
  <StyledCard overflow="hidden" bg={bg || 'surface'} {...rest}>
    {children}
  </StyledCard>
);

Card.defaultProps = {};

export default Card;
