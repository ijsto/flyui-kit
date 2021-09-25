import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';

export const StyledCardBody = styled(Box)`
  height: auto;
  overflow: scroll;
`;

const CardBody = ({ bg, children, ...rest }) => (
  <StyledCardBody bg={bg || 'surface'}>
    <Box {...rest}>{children}</Box>
  </StyledCardBody>
);

CardBody.defaultProps = {};

export default CardBody;