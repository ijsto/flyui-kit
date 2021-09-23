import React from 'react';
import styled, { css } from 'styled-components';

import Box from '../layout/Box';

const avatarBaseStyles = css`
  height: ${({ size, height }) => height || size};
  min-height: ${({ size, height }) => height || size};
  width: ${({ size, width }) => width || size};
  min-width: ${({ size, width }) => width || size};
  position: relative;
`;

const StyledAvatar = styled(Box)`
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${avatarBaseStyles};
`;

const StyledContentAvatar = styled(Box)`
  align-items: center;
  display: flex;
  font-size: 75%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  ${avatarBaseStyles};
`;

const defaultSizes = ['ty', 'sm', 'md', 'lg', 'xl'];
const normalizeSize = size => {
  switch (size) {
    case 'ty':
      return '18px';
    case 'sm':
      return '24px';
    case 'md':
      return '32px';
    case 'lg':
      return '48px';
    case 'xl':
      return '92px';

    default:
      return '32px';
  }
};

const switchShapeRadius = shape => {
  switch (shape) {
    case 'round':
      return '99999rem';
    case 'rounded':
      return 4;
    case 'regular':
      return 3;
    case 'squared':
      return 2;
    case 'square':
      return 0;

    default:
      return 0;
  }
};

const Avatar = ({
  children,
  outline,
  outlineColor,
  outlineWidth,
  shape,
  ...rest
}) => {
  const normalizedSize = defaultSizes.includes(rest.size)
    ? normalizeSize(rest.size)
    : rest.size;

  if (shape) {
    // @TODO: Calculate borderRadius based on size
    // eslint-disable-next-line no-param-reassign
    rest.borderRadius = switchShapeRadius(shape);
  }

  if (outline) {
    // eslint-disable-next-line no-param-reassign
    rest.border = 1;
    // eslint-disable-next-line no-param-reassign
    rest.borderColor = outlineColor || undefined;
    // eslint-disable-next-line no-param-reassign
    rest.borderWidth = outlineWidth || undefined;
  }

  if (children) {
    return (
      <StyledContentAvatar {...rest} size={normalizedSize}>
        {children}
      </StyledContentAvatar>
    );
  }

  return <StyledAvatar {...rest} size={normalizedSize} />;
};

Avatar.defaultProps = {
  radius: '50%',
  size: '48px',
  src: '',
};

export default Avatar;
