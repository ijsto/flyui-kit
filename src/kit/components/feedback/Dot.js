import React from 'react';
import styled from 'styled-components';
import Box from '../layout/Box';

export const StyledDot = styled(Box)`
  align-items: center;
  aspect-ratio: 1/1;
  justify-content: center;
  display: flex;
  width: ${({ size }) => size || '12px'};
  border-radius: 50%;
  box-sizing: border-box;
`;

const Dot = ({ color, variant, borderStyle, borderWidth, ...rest }) => {
  const colorProps = {
    bg: variant === 'outline' ? 'transparent' : color,
    borderColor: color || 'transparent',
  };

  if (!color) delete colorProps.bg;

  return (
    <StyledDot
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      {...rest}
      {...colorProps}
    />
  );
};

Dot.defaultProps = {
  borderStyle: 'solid',
  borderWidth: '2px',
  variant: 'filled',
};

export default Dot;
