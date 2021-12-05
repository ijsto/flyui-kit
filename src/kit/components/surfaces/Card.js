import React from 'react';
import styled from 'styled-components';

import { hideScrollbar as hideScrollbarMixin } from '../../lib/mixins/overflow';
import { getRadius } from '../../utils/sizing';

import Box from '../layout/Box';

export const StyledCard = styled(Box)`
  border-radius: ${({ radius, theme }) => getRadius({ radius, theme })};

  ${({ hideScrollbar }) => hideScrollbar && hideScrollbarMixin};
`;

const Card = ({ bg, children, toolbar, ...rest }) => (
  <StyledCard overflow="hidden" bg={bg || 'surface'} {...rest}>
    {children}
  </StyledCard>
);

Card.defaultProps = {
  radius: 'base',
};

export default Card;
