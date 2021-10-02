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

  ${({ transform }) =>
    css`
      text-transform: ${transform};
    `}
`;

const Text = ({ center, children, inline, textCenter, ...rest }) => (
  <StyledText
    display={inline ? 'inline' : rest.display}
    textAlign={textCenter || center ? 'center' : rest.alignText}
    {...rest}
  >
    {children}
  </StyledText>
);

export default Text;
