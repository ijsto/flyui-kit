import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import LoadingSpinner from '../feedback/LoadingSpinner';
import Box from '../layout/Box';

import {
  tagShapeStyles,
  tagSizeStyles,
  tagTypographyStyles,
  tagVariantStyles,
} from '../../lib/mixins/tagMixins';
import { renderIcon } from '../../utils/icons';
import { a11yClick } from '../../utils/a11y';

import Avatar from './Avatar';
import SVG from './SVG';
import Text from './Text';

export const StyledTagIcon = styled.span`
  ${space};
  display: flex;
  align-items: center;
`;

export const StyledTag = styled(Box)`
  ${tagSizeStyles};
  ${tagShapeStyles};
  ${tagTypographyStyles};
  ${tagVariantStyles};
  box-sizing: border-box;
  cursor: ${({ isClickable }) => isClickable && 'pointer'};
  display: inline-flex;
  grid-gap: ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return theme.space[1];
      case 'md':
        return theme.space[1];
      case 'lg':
        return theme.space[2];
      default:
        return theme.space[1];
    }
  }}px;
  letter-spacing: 0.75px;
  max-width: 100%;
  white-space: nowrap;
  ${space};

  .avatar {
    margin-left: ${({ size }) => {
      switch (size) {
        case 'sm':
          return '-3px';
        case 'md':
          return '-5px';
        case 'lg':
          return '-7px';
        default:
          return '-5px';
      }
    }};
  }
  .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Tag = ({
  avatar,
  children,
  color,
  disabled,
  disableFocus,
  disableHover,
  endIcon,
  href,
  loading,
  loadingLabel,
  onClick,
  size,
  startIcon,
  ...rest
}) => {
  const hasInteraction = !disabled && (onClick || href);

  return (
    <StyledTag
      bg={color}
      isClickable={hasInteraction && !disableFocus}
      isHoverable={hasInteraction && !disableHover}
      role={hasInteraction ? 'button' : undefined}
      onKeyDown={hasInteraction ? e => a11yClick(e, onClick) : undefined}
      tabIndex={hasInteraction ? '0' : undefined}
      onClick={!disabled && onClick ? () => onClick() : null}
      size={size}
      {...rest}
    >
      {avatar && (
        <Box display="flex" className="avatar" py="2px">
          <Avatar
            alt={avatar.alt || 'Avatar'}
            size="100%"
            shape={avatar.shape || 'rounded'}
            src={avatar.src || avatar}
          />
        </Box>
      )}

      {startIcon && (
        <SVG fill={color} icon={renderIcon(startIcon)} variant={color} />
      )}
      {loading && (
        <SVG
          fill={color}
          icon={<LoadingSpinner size="12px" mr={1} />}
          size={size}
          variant={color}
        />
      )}

      <Text
        alignItems="center"
        display="inline-flex"
        className="loading-label"
        variant={size !== 'lg' && 'caption'}
      >
        {loading && loadingLabel}
        {!loading && children}
      </Text>

      {endIcon && (
        <SVG fill={color} icon={renderIcon(endIcon)} variant={color} />
      )}
    </StyledTag>
  );
};

Tag.defaultProps = {
  avatar: null,
  children: null,
  color: null,
  disableFocus: null,
  disableHover: null,
  disabled: null,
  endIcon: null,
  href: null,
  loading: null,
  loadingLabel: null,
  onClick: null,
  size: 'md',
  startIcon: null,
};

export default Tag;
