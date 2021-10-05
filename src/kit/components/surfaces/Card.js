import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';

export const StyledCard = styled(Box)`
  border-radius: ${({ borderRadius, theme }) =>
    /* 1) if provided on card 2) [fallback] CSS Variable 3) [fallback]  */
    borderRadius || `var(--radius-surface, ${theme.surface.radius}px)`};
`;

const Card = ({ bg, children, toolbar, ...rest }) => (
  <StyledCard overflow="hidden" bg={bg || 'surface'} {...rest}>
    {children}
  </StyledCard>
);

Card.defaultProps = {};

export default Card;
