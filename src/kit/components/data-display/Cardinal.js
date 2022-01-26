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
  headColor,
  bodyFamily,
  bodySize,
  bodyStyles,
  headTransform,
  bodyWeight,
  head,
  headAs,
  bodyColor,
  headFamily,
  headSize,
  headStyles,
  bodyTransform,
  headWeight,
  items: cardinals,
  orientation,
  spaceX,
}) => {
  const cardinalBaseProps = {
    orientation,
    spaceX,
    textAlign: align,
  };
  const headBaseProps = {
    as: headAs,
    color: headColor,
    fontFamily: headFamily,
    fontSize: headSize,
    fontWeight: headWeight,
    m: 0,
    p: 0,
    pb: orientation === 'vertical' ? 1 : 0,
    transform: headTransform,
    ...headStyles,
  };
  const bodyBaseProps = {
    as: bodyAs,
    color: bodyColor,
    fontFamily: bodyFamily,
    fontSize: bodySize,
    fontWeight: bodyWeight,
    m: 0,
    p: 0,
    transform: bodyTransform,
    ...bodyStyles,
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
  bodySize: 'sm',
  bodyWeight: 'light',
  headAs: 'dt',
  headSize: 'md',
  headWeight: 'bold',
  items: [],
  orientation: 'vertical',
  spaceX: 2,
};
export default Cardinal;
