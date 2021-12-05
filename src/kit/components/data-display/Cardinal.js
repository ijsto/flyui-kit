import React from 'react';
import styled, { css } from 'styled-components';

import Text from './Text';
import Box from '../layout/Box';

const StyledCardinal = styled(Box)`
  ${({ orientation, theme, spaceX }) =>
    orientation === 'horizontal'
      ? css`
          align-items: center;
          display: flex;
          grid-gap: ${theme.space[spaceX]}px;
        `
      : css`
          display: inline-block;
        `}

  ${({ transform }) =>
    css`
      text-transform: ${transform};
    `}
`;

const Cardinal = ({
  align,
  children,
  body,
  bodyAs,
  bodyFontSize,
  bodyFontWeight,
  head,
  headAs,
  headFontSize,
  headFontWeight,
  items: cardinals,
  orientation,
  spaceX,
}) => {
  const cardinalBaseProps = {
    orientation,
    spaceX,
    textAlign: align,
  };
  console.log('cardinalBaseProps', cardinalBaseProps);
  const headBaseProps = {
    as: headAs,
    fontSize: headFontSize,
    fontWeight: headFontWeight,
    m: 0,
    p: 0,
    pb: 1,
  };
  const bodyBaseProps = {
    as: bodyAs,
    fontSize: bodyFontSize,
    fontWeight: bodyFontWeight,
    m: 0,
    p: 0,
  };

  return (
    <Box as="dl" display="flex" flexWrap="wrap" m={0} p={0}>
      <StyledCardinal {...cardinalBaseProps}>
        <Text {...headBaseProps}>{head}</Text>

        <Text {...bodyBaseProps}>{body}</Text>
        {children}
      </StyledCardinal>

      {cardinals?.length > 0 &&
        cardinals.map((c, i) => (
          <StyledCardinal key={`fly-cardinal-${i}`} {...cardinalBaseProps}>
            <Text {...headBaseProps}>{c.head}</Text>

            <Text {...bodyBaseProps}>{c.body}</Text>
            {c.children}
          </StyledCardinal>
        ))}
    </Box>
  );
};

Cardinal.defaultProps = {
  align: 'left',
  bodyAs: 'dd',
  bodyFontSize: 'sm',
  bodyFontWeight: 'light',
  headAs: 'dt',
  headFontSize: 'md',
  headFontWeight: 'bold',
  items: [],
  orientation: 'vertical',
  spaceX: 2,
};
export default Cardinal;
