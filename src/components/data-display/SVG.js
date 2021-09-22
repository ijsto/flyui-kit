import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';
// import { svgStyles } from '@/lib/mixins/svg';
import { renderIcon } from '../../utils/icons';

const StyledSVGContainer = styled(Box)`
  display: inline-flex;
  /* {svgStyles}; */
`;

// Renders SVG container that applies SVG styles to SVG icon.
// @TODO: See if we can add default fill here, or if there are cases where this would not work.
const SVG = ({ icon, ...rest }) => {
  const formattedIcon = typeof icon === 'string' ? renderIcon(icon) : icon;
  return <StyledSVGContainer {...rest}>{formattedIcon}</StyledSVGContainer>;
};

SVG.defaultProps = {
  resetFill: true,
};

export default SVG;
