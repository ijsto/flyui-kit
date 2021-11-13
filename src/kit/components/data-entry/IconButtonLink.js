import React, { forwardRef } from 'react';

import ButtonLink from './ButtonLink';

const IconButtonLink = forwardRef(
  (
    {
      icon,
      children,
      iconsSize: propsIconSize,
      iconVariant,
      loading,
      startIcon,
      size,
      ...rest
    },
    ref
  ) => {
    const sanitizedRestProps = rest;
    delete sanitizedRestProps.loadingLabel;
    delete sanitizedRestProps.height;
    delete sanitizedRestProps.width;
    delete sanitizedRestProps.endIcon;

    // Check if "px", extract number, do math, add back "px"
    const pixelUnits = size?.includes('px') ? size.replace('px', '') : false;
    const iconSize = pixelUnits ? `${pixelUnits * 0.65}px` : '1rem';

    return (
      <ButtonLink
        {...sanitizedRestProps}
        childrenPadding={0}
        height={size}
        iconSize={iconSize}
        m={0}
        p={0}
        ref={ref}
        startIcon={startIcon || icon || children}
        type={rest.type || 'submit'}
        width={size}
      />
    );
  }
);

IconButtonLink.defaultProps = {
  iconVariant: null,
  iconsSize: null,
  loading: null,
  size: '32px',
  startIcon: null,
};

export default IconButtonLink;
