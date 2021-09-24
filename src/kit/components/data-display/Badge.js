import React from 'react';
import styled, { css } from 'styled-components';

import Text from './Text';
import Box from '../layout/Box';

const badgeAlignmentStyles = ({ align, isVisible }) => {
  const scaleTransform = isVisible ? 'scale(1)' : 'scale(0)';
  const horizontalTransform = align.includes('left') ? '-40%' : '40%';
  const verticalTransform = align.includes('top') ? '-40%' : '40%';
  const horizontalTransformOrigin = align.includes('left') ? '-40%' : '40%';
  const verticalTransformOrigin = align.includes('top') ? '-40%' : '40%';
  const horizontalAlign = align.includes('left') ? 'left: 0;' : 'right: 0;';
  const verticalAlign = align.includes('top') ? 'top: 0;' : 'bottom: 0;';

  const transformOriginValue = `${horizontalTransformOrigin} ${verticalTransformOrigin})`;
  const transformValue = `${scaleTransform} translate(${horizontalTransform}, ${verticalTransform})`;
  const alignValue = css`
    ${horizontalAlign};
    ${verticalAlign};
  `;

  return css`
    ${alignValue}
    transform: ${transformValue};
    transform-origin: ${transformOriginValue};
  `;
};

const StyledBadgeContainer = styled(Box)``;
const StyledBadge = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
  line-height: 1;
  position: absolute;
  text-align: center;
  transition: transform
    ${({ theme: { transition } }) =>
      `${transition.speed.fast} ${transition.animation}`};
  z-index: 1;
  ${badgeAlignmentStyles};
`;

const Badge = ({
  align = 'left',
  body,
  color,
  children,
  isVisible,
  variant,
}) => {
  const showBadge = Boolean(body);
  const showBody = variant !== 'dot';

  return (
    <StyledBadgeContainer display="inline-flex" position="relative">
      <StyledBadge
        isVisible={isVisible && showBadge}
        align={align}
        bg={color}
        px={variant !== 'dot' && '5px'}
        borderRadius={5}
        height={variant === 'dot' ? '8px' : '18px'}
        minWidth={variant === 'dot' ? '8px' : '10px'}
      >
        {showBody && <Text variant="caption">{body}</Text>}
      </StyledBadge>

      {children}
    </StyledBadgeContainer>
  );
};

Badge.defaultProps = {
  align: 'top',
  color: 'error',
  isVisible: true,
};

export default Badge;
