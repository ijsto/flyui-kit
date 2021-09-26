import React from 'react';
import styled from 'styled-components';

import SVG from '../data-display/SVG';
import Text from '../data-display/Text';
import Box from '../layout/Box';

import { renderIcon } from '../../utils/icons';

export const StyledCardToolbar = styled(Box)`
  align-items: center;
  display: flex;
  grid-gap: ${({ theme }) => theme.space[2]}px;
  height: auto;
`;

const CardToolbar = ({ bg, icon, iconColor, startIcon, title, ...rest }) => (
  <StyledCardToolbar bg={bg || 'surface'} px={2} {...rest}>
    {(icon || startIcon) && (
      <SVG
        fill={iconColor}
        icon={renderIcon(icon || startIcon)}
        variant={iconColor}
        size="16px"
      />
    )}

    <Text variant="h4" m={0} p={0}>
      {title}
    </Text>
  </StyledCardToolbar>
);

CardToolbar.defaultProps = {};

export default CardToolbar;
