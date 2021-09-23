import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import SVG from '../data-display/SVG';
import LoadingIcon from '../../icons/circle-notch.svg';
import Box from '../layout/Box';
import Text from '../data-display/Text';

import {
  buttonShapeStyles,
  buttonSizeStyles,
  buttonTypographyStyles,
  buttonVariantStyles,
} from '../../lib/mixins/buttonMixins';

export const StyledButtonLink = styled.a`
  ${buttonSizeStyles};
  ${buttonShapeStyles};
  ${buttonTypographyStyles};

  &:focus,
  &:hover {
    /* @TODO:  */
  }
`;

const StyledButton = styled.button`
  ${({ inline }) => (inline ? 'display: inline;' : 'display: block;')};
  ${buttonSizeStyles};
  ${buttonShapeStyles};
  ${buttonTypographyStyles};

  ${({ unstyled }) => !unstyled && buttonVariantStyles};

  &:focus,
  &:hover {
    /* @TODO:  */
  }
`;

export const StyledButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  span {
    white-space: nowrap;
  }
`;

const StyledButtonContent = styled.span`
  ${layout};
  ${space};
`;
export const StyledButtonIcon = styled.span`
  ${space};
  display: flex;
  align-items: center;
`;

export const ButtonIcon = ({ icon, fill, size, variant, ...rest }) =>
  icon ? (
    <StyledButtonIcon {...rest}>
      <SVG
        fill={fill}
        icon={icon}
        noHover
        hoverable
        resetFill
        size={size}
        variant={variant}
      />
    </StyledButtonIcon>
  ) : null;

ButtonIcon.defaultProps = {
  size: '16px',
  variant: null,
};

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
  <StyledButtonWrapper>
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
        <ButtonIcon icon={<LoadingIcon className="spin" />} size={16} />
        {loadingLabel && <Text pl={2}>{loadingLabel}</Text>}
      </Box>
    ) : (
      children && (
        <StyledButtonContent display={labelDisplay} mx={1}>
          {children}
        </StyledButtonContent>
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
  // Control label display ("block", "none"), useful, for example, if want to hide on mobile.
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
export default Button;
