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
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
  ${({ transform }) =>
    css`
      text-transform: ${transform};
    `}
`;

const Text = ({ children, my = 0, onClick, ...rest }) => (
  <StyledText
    my={my}
    tabIndex={onClick || rest.variant === 'link' ? 0 : null}
    // @TODO: Add keydown and a11y handlers
    // onKeyDown={e => a11yClick(e, onClick)}
    onClick={onClick}
    clickable={Boolean(onClick)}
    {...rest}
  >
    {children}
  </StyledText>
);

export default Text;
