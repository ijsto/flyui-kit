import React from 'react';
import styled, { css } from 'styled-components';

import Box from '../layout/Box';

import { getRadius, getSize } from '../../utils/sizing';

const sizingStyles = ({ height, size, width, theme }) => css`
  height: ${height || getSize({ size, theme })};
  min-height: ${height || getSize({ size, theme })};
  width: ${width || getSize({ size, theme })};
  min-width: ${width || getSize({ size, theme })};
`;

const StyledAvatar = styled.div`
  background-color: ${({ bg, theme }) => bg || theme.colors.background};
  overflow: hidden;
  position: relative;
  img {
    max-width: 100%;
  }
  ${({ src }) =>
    !src &&
    css`
      align-items: center;
      border-radius: ${({ radius, theme }) => getRadius({ radius, theme })};
      color: ${({ theme }) => theme?.colors?.text || 'inherit'};
      display: inline-flex;
      justify-content: center;
      ${sizingStyles}
    `};

  ${({ src }) =>
    src &&
    css`
      img {
        ${sizingStyles}
        border-radius: ${({ radius, theme }) => getRadius({ radius, theme })};
        max-width: 100%;
      }
    `}
`;

const defaultAvatarSizes = ['ty', 'sm', 'md', 'lg', 'xl'];
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
  alt,
  borderRadius,
  Component,
  componentProps,
  initials,
  radius,
  src,
  ...rest
}) => {
  const normalizedSize = defaultAvatarSizes.includes(rest.size)
    ? normalizeSize(rest.size)
    : rest.size;

  const ImageComponent = Component || 'img';
  const foreignComponentProps = Component ? { componentProps } : {};

  const avatarContainerProps = {
    as: 'span',
    radius,
    size: normalizedSize,
    ...rest,
  };

  return (
    <StyledAvatar {...avatarContainerProps}>
      {src && <ImageComponent src={src} alt={alt} {...foreignComponentProps} />}
      {!src && initials && <Box role="img">{initials}</Box>}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  radius: '50%',
  size: '28px',
  src: '',
};

export default Avatar;
