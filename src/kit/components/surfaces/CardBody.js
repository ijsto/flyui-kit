import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';

export const StyledCardBody = styled(Box)`
  height: ${({ height }) => height};
`;

StyledCardBody.defaultProps = {
  height: '100%',
  overflow: 'auto',
};

const CardBody = ({ bg, children, height, ...rest }) => (
  <StyledCardBody bg={bg} {...rest}>
    {children}
  </StyledCardBody>
);

CardBody.defaultProps = {};

export default CardBody;
