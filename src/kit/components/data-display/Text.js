import React from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography, layout } from 'styled-system';

import { textVariantStyles } from '../../lib/mixins/typographyMixins';

import Box from '../layout/Box';

const StyledText = styled(Box)`
  ${textVariantStyles};
  ${typography};
  ${color};
  ${layout};
  ${space};

  ${({ transform, wrap }) =>
    css`
      text-transform: ${transform};
      white-space: ${wrap};
    `}
`;

const Text = ({
  center,
  children,
  family,
  inline,
  textCenter,
  fontFamily,
  fontSize,
  fontWeight,
  size,
  weight,
  ...rest
}) => (
  <StyledText
    display={inline ? 'inline' : rest.display}
    textAlign={textCenter || center ? 'center' : rest.align}
    fontFamily={fontFamily || family}
    fontSize={fontSize || size}
    fontWeight={fontWeight || weight}
    {...rest}
  >
    {children}
  </StyledText>
);

Text.defaultProps = {
  wrap: 'normal',
};

export default Text;
