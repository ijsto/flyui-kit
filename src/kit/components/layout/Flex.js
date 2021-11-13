import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  border,
  borderRadius,
  color,
  flexbox,
  layout,
  space,
  position,
  typography,
} from 'styled-system';

const StyledFlex = styled.div`
  ${border};
  ${borderRadius};
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${typography};
`;

const Flex = forwardRef(
  (
    { children, align, basis, direction, grow, shrink, wrap, justify, ...rest },
    ref
  ) => {
    const alignItems = align ?? rest.alignItems;
    const flexBasis = basis ?? rest.flexBasis;
    const flexDirection = direction ?? rest.flexDirection;
    const flexGrow = grow ?? rest.flexGrow;
    const flexShrink = shrink ?? rest.flexShrink;
    const flexWrap = wrap ?? rest.flexWrap;
    const justifyContent = justify ?? rest.justifyContent;
    return (
      <StyledFlex
        {...rest}
        ref={ref}
        alignItems={alignItems}
        flexBasis={flexBasis}
        flexDirection={flexDirection}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
      >
        {children}
      </StyledFlex>
    );
  }
);

export default Flex;
