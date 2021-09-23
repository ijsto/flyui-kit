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

const Avatar = ({
  initials,
  children,
  outline,
  outlineColor,
  outlineWidth,
  shape,
  ...rest
}) => {
  if (shape) {
    // @TODO: Calculate borderRadius based on size
    switch (shape) {
      case 'round':
        // eslint-disable-next-line no-param-reassign
        rest.borderRadius = '99999rem';
        break;
      case 'rounded':
        // eslint-disable-next-line no-param-reassign
        rest.borderRadius = 4;
        break;
      case 'regular':
        // eslint-disable-next-line no-param-reassign
        rest.borderRadius = 3;
        break;
      case 'squared':
        // eslint-disable-next-line no-param-reassign
        rest.borderRadius = 2;
        break;
      case 'square':
        // eslint-disable-next-line no-param-reassign
        rest.borderRadius = 0;
        break;

      default:
        break;
    }
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
    if (defaultSizes.includes(rest.size))
      return (
        <StyledContentAvatar {...rest} size={normalizeSize(rest.size)}>
          {children}
        </StyledContentAvatar>
      );

    return <StyledContentAvatar {...rest}>{children}</StyledContentAvatar>;
  }

  if (initials && !rest.src) {
    const normalizedInitials = initials;

    if (defaultSizes.includes(rest.size))
      return (
        <StyledContentAvatar {...rest} size={normalizeSize(rest.size)}>
          {normalizedInitials}
        </StyledContentAvatar>
      );

    return (
      <StyledContentAvatar {...rest}>{normalizedInitials}</StyledContentAvatar>
    );
  }

  if (defaultSizes.includes(rest.size))
    return <StyledAvatar {...rest} size={normalizeSize(rest.size)} />;

  return <StyledAvatar {...rest} />;
};

Avatar.defaultProps = {
  radius: '50%',
  size: '48px',
  src: '',
};

export default Avatar;
