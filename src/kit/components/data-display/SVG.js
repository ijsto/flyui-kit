import React from 'react';
import styled, { css } from 'styled-components';

import Box from '../layout/Box';
import { renderIcon } from '../../utils/icons';
import { fontProps } from '../../lib/theme';

const StyledSVGContainer = styled(Box)`
  align-items: center;
  display: inline-flex;

  ${({ unstyled }) =>
    !unstyled &&
    css`
      svg {
        fill: ${({ color, theme }) =>
          // @TODO: Handle variants
          color || `var(--color-svg-primary, ${theme.colors.svg})`};
        height: ${({ size }) => size};
        width: ${({ size }) => size};
      }
    `}
`;

const SVG = ({ icon, ...rest }) => {
  const formattedIcon = typeof icon === 'string' ? renderIcon(icon) : icon;
  return <StyledSVGContainer {...rest}>{formattedIcon}</StyledSVGContainer>;
};

SVG.defaultProps = {
  size: `${fontProps.fontSizes.body || 14}px`,
};

export default SVG;
