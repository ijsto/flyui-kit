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

  &:focus {
    /* @TODO: */
  }

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
  endIcon,
  iconVariant,
  iconsSize,
  labelDisplay,
  loading,
  loadingLabel,
  startIcon,
}) => (
  <StyledButtonChildrenContainer px={3}>
    {!loading && (
      <ButtonIcon
        variant={iconVariant}
        icon={startIcon}
        size={iconsSize}
        // We have `mr` here to improve layout appearance when there's only icon and no label.
        mr={children && 1}
      />
    )}

    {loading ? (
      // We have `mr` here to improve layout appearance when there's only icon and no label.
      <Box display="flex" alignItems="center" mr={children && 1}>
        <ButtonIcon icon={<LoadingIcon className="spin" />} size={iconsSize} />
        {loadingLabel && <Text pl={2}>{loadingLabel}</Text>}
      </Box>
    ) : (
      children && (
        <Box as="span" display={labelDisplay} mx={1}>
          {children}
        </Box>
      )
    )}

    {!loading && <ButtonIcon icon={endIcon} size={iconsSize} />}
  </StyledButtonChildrenContainer>
);

const ButtonLink = ({
  children,
  endIcon,
  iconsSize,
  fill,
  labelDisplay,
  loading,
  loadingLabel,
  startIcon,
  target,
  ...rest
}) => (
  <StyledButtonLink tabIndex="0" target={target} {...rest}>
    <ButtonChildrenContainer
      endIcon={endIcon}
      iconsSize={iconsSize}
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
