import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';

export const StyledCard = styled(Box)`
  border-radius: var(--card-radius, ${({ theme }) => theme.radius.card.md});
`;

const Card = ({ bg, children, ...rest }) => (
  <StyledCard bg={bg || 'surface'} {...rest}>
    {children}
  </StyledCard>
);

Card.defaultProps = {};

export default Card;
