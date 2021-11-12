import React from 'react';
import styled, { css } from 'styled-components';

import Box from '../layout/Box';
import { renderIcon } from '../../utils/icons';

const StyledSVGContainer = styled(Box)`
  align-items: center;
  display: inline-flex;

  svg {
    fill: ${({ color, theme }) =>
      color || `var(--color-svg-primary, ${theme.colors.svg})`};
    /* Sizes */
    ${({ width, height, size, theme }) => {
      if (size) {
        return css`
          height: ${size};
          width: ${size};
        `;
      }
      if (width) {
        return css`
          height: auto;
          width: ${width};
        `;
      }
      if (height) {
        return css`
          height: ${height};
          width: auto;
        `;
      }
      return css`
        height: ${theme.fontSizes.body || 14}px;
        width: ${theme.fontSizes.body || 14}px;
      `;
    }}
  }
`;

const SVG = ({ icon, ...rest }) => {
  const formattedIcon = typeof icon === 'string' ? renderIcon(icon) : icon;
  return <StyledSVGContainer {...rest}>{formattedIcon}</StyledSVGContainer>;
};

SVG.defaultProps = {
  height: null,
  size: null,
  width: null,
};

export default SVG;
