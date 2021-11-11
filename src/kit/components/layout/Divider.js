import React from 'react';
import styled, { css } from 'styled-components';

const StyledDivider = styled.hr`
  opacity: 0.75;
  background-color: transparent;
  border-image: initial;
  border-left-width: 0px;
  border-left-color: transparent;
  border-top-color: transparent;
  border-top-width: 0px;

  border-style: ${({ variant }) => variant};

  ${({ orientation }) => {
    if (orientation === 'vertical') {
      return css`
        border-bottom-color: transparent;
        border-bottom-width: 0px;
        border-right-color: ${({ color }) => color};
        border-right-width: ${({ size }) => size};
        height: 100%;
      `;
    }
    return css`
      border-bottom-color: ${({ color }) => color};
      border-bottom-width: ${({ size }) => size};
      border-right-color: transparent;
      border-right-width: 0px;
      width: 100%;
    `;
  }}
`;

const Divider = ({ ...rest }) => (
  <StyledDivider aria-orientation={rest.orientation} {...rest} />
);

Divider.defaultProps = {
  color: 'var(--color-primary, #f02ff0)',
  orientation: 'horizontal',
  size: '1px',
  variant: 'solid',
};

export default Divider;
