import React from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography, layout } from 'styled-system';

import { textVariantStyles } from '../../lib/mixins/typographyMixins';

import Box from '../layout/Box';

const StyledText = styled(Box)`
  ${textVariantStyles};
  ${color};
  ${layout};
  ${space};
  ${typography};

  ${({ transform, wrap }) =>
    css`
      text-transform: ${transform};
      white-space: ${wrap};
    `}
`;

const Text = ({
  center,
  children,
  inline,
  textCenter,
  fontSize,
  size,
  ...rest
}) => (
  <StyledText
    display={inline ? 'inline' : rest.display}
    textAlign={textCenter || center ? 'center' : rest.align}
    fontSize={fontSize || size}
    {...rest}
  >
    {children}
  </StyledText>
);

Text.defaultProps = {
  wrap: 'normal',
};

export default Text;
