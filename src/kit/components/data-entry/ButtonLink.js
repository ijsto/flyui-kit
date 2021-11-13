import React from 'react';
import styled from 'styled-components';

import SVG from '../data-display/SVG';
import LoadingIcon from '../../icons/circle-notch.svg';
import Box from '../layout/Box';
import Text from '../data-display/Text';

import {
  buttonBaseStyles,
  buttonHoverEffectsStyles,
  buttonHoverColorStyles,
  buttonShapeStyles,
  buttonSizeStyles,
  buttonVariantStyles,
} from '../../lib/mixins/buttonMixins';
import { inputDisabledStyles } from '../../lib/mixins/inputMixins';

const StyledButtonLink = styled.a`
  align-items: center;
  display: inline-flex;
  ${buttonBaseStyles};
  ${buttonSizeStyles};
  ${buttonShapeStyles};

  &:hover {
    ${buttonHoverEffectsStyles};
    ${buttonHoverColorStyles};
  }

  &:disabled,
  &[disabled] {
    ${inputDisabledStyles};
  }

  ${({ unstyled }) => !unstyled && buttonVariantStyles};
`;

const StyledButtonChildrenContainer = styled(Box)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  span {
    white-space: nowrap;
  }
`;

const ButtonIcon = ({ icon, fill, size, variant, ...rest }) =>
  icon ? (
    <Box display="flex" alignItems="center" {...rest}>
      <SVG fill={fill} icon={icon} size={size} variant={variant} />
    </Box>
  ) : null;

const ButtonChildrenContainer = ({
  children,
  childrenPadding,
  endIcon,
  iconVariant,
  iconSize,
  labelDisplay,
  loading,
  loadingLabel,
  startIcon,
}) => (
  <StyledButtonChildrenContainer px={childrenPadding ?? 3} width="100%">
    {!loading && (
      <ButtonIcon
        variant={iconVariant}
        icon={startIcon}
        size={iconSize}
        // We have `mr` here to improve layout appearance when there's only icon and no label.
        mr={children && 1}
      />
    )}

    {loading ? (
      // We have `mr` here to improve layout appearance when there's only icon and no label.
      <Box display="flex" alignItems="center" mr={children && 1}>
        <ButtonIcon icon={<LoadingIcon className="spin" />} size={iconSize} />
        {loadingLabel && <Text pl={2}>{loadingLabel}</Text>}
      </Box>
    ) : (
      children && (
        <Box as="span" display={labelDisplay} mx={1}>
          {children}
        </Box>
      )
    )}

    {!loading && <ButtonIcon icon={endIcon} size={iconSize} />}
  </StyledButtonChildrenContainer>
);

const ButtonLink = ({
  block,
  children,
  childrenPadding,
  endIcon,
  fill,
  iconSize,
  labelDisplay,
  loading,
  loadingLabel,
  startIcon,
  size,
  tabIndex = 0,
  ...rest
}) => (
  <StyledButtonLink
    {...rest}
    tabIndex={tabIndex}
    size={size}
    width={block ? '100%' : rest.width}
  >
    <ButtonChildrenContainer
      childrenPadding={childrenPadding}
      endIcon={endIcon}
      iconSize={iconSize}
      fill={fill}
      labelDisplay={labelDisplay}
      loading={loading}
      loadingLabel={loadingLabel}
      startIcon={startIcon}
    >
      {children}
    </ButtonChildrenContainer>
  </StyledButtonLink>
);

export default ButtonLink;
