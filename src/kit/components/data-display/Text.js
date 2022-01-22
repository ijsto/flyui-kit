import React from 'react';
import styled, { css } from 'styled-components';
import { color, flexbox, grid, space, typography, layout } from 'styled-system';

import { textVariantStyles } from '../../lib/mixins/typographyMixins';

const StyledText = styled.div`
  ${textVariantStyles};
  ${typography};
  ${flexbox};
  ${color};
  ${grid};
  ${layout};
  ${space};
  gap: ${({ gap }) => gap || '12px'};

  ${({ transform, wrap }) =>
    css`
      text-transform: ${transform};
      white-space: ${wrap};
    `}
`;

const Text = ({
  align,
  center,
  children,
  family,
  inline,
  textAlign,
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
    textAlign={textCenter || center ? 'center' : textAlign || align}
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
