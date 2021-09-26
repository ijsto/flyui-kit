import React, { forwardRef } from 'react';
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
`;

const StyledButton = styled.button`
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

const StyledButtonWrapper = styled(Box)`
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
  <StyledButtonWrapper px={3}>
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
  </StyledButtonWrapper>
);

/**
 * @param {React Component} SVGIcon Imported SVG React Component from path (example "@/icons/paper-plane.svg")
 */
export const ButtonLink = forwardRef(
  (
    {
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
    },
    ref
  ) => (
    <StyledButtonLink tabIndex="0" target={target} ref={ref} {...rest}>
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
  )
);

const Button = ({
  children,
  endIcon,
  iconsSize,
  iconVariant,
  labelDisplay,
  loading,
  loadingLabel,
  startIcon,
  ...rest
}) => (
  <StyledButton type={rest.type || 'submit'} {...rest}>
    <ButtonChildrenContainer
      endIcon={endIcon}
      iconsSize={iconsSize}
      iconVariant={iconVariant}
      labelDisplay={labelDisplay}
      loading={loading}
      loadingLabel={loadingLabel}
      startIcon={startIcon}
    >
      {children}
    </ButtonChildrenContainer>
  </StyledButton>
);

Button.defaultProps = {
  endIcon: null,
  iconVariant: null,
  iconsSize: '14px',
  // Control label display ("block", "none"), useful, for example, if want to hide on mobile: "".
  labelDisplay: null,
  loading: null,
  loadingLabel: null,
  startIcon: null,
};

export default Button;
