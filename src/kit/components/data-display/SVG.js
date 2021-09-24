import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';
import { renderIcon } from '../../utils/icons';

const StyledSVGContainer = styled(Box)`
  align-items: center;
  display: inline-flex;
`;

const SVG = ({ icon, ...rest }) => {
  const formattedIcon = typeof icon === 'string' ? renderIcon(icon) : icon;
  return <StyledSVGContainer {...rest}>{formattedIcon}</StyledSVGContainer>;
};

SVG.defaultProps = {
  resetFill: true,
};

export default SVG;
