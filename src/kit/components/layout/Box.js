import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  border,
  borderRadius,
  color,
  flexbox,
  layout,
  grid,
  space,
  position,
  typography,
} from 'styled-system';

import { a11yClick } from '../../utils/a11y';

const StyledBox = styled.div`
  ${border};
  ${borderRadius};
  ${color};
  ${flexbox};
  ${grid};
  ${space};
  ${layout};
  ${position};
  ${typography};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;

const Box = forwardRef(({ children, gap, gridGap, ...rest }, ref) => {
  const isButtonLike = Boolean(rest.onClick);

  const buttonRoleProps = isButtonLike
    ? {
        'aria-disabled': rest.disabled,
        onKeyDown: e => a11yClick(e, rest.onClick),
        role: 'button',
        tabIndex: 0,
      }
    : {};

  return (
    <StyledBox
      ref={ref}
      gridGap={gridGap || gap}
      {...buttonRoleProps}
      {...rest}
    >
      {children}
    </StyledBox>
  );
});

export default Box;
