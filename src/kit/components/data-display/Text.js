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

const Text = ({ children, inline, onClick, ...rest }) => (
  <StyledText
    tabIndex={onClick || rest.variant === 'link' ? 0 : null}
    onClick={onClick}
    display={inline ? 'inline' : rest.display}
    clickable={Boolean(onClick)}
    {...rest}
  >
    {children}
  </StyledText>
);

export default Text;
