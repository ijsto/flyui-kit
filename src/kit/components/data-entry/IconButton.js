import React, { forwardRef } from 'react';

import Button from './Button';

const IconButton = forwardRef(
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
      <Button
        {...sanitizedRestProps}
        childrenPadding={0}
        height={size}
        iconSize={iconSize}
        loading={loading}
        p={0}
        ref={ref}
        // @TODO: The loading needs to be improved
        startIcon={loading ? 'loading' : startIcon || icon || children}
        type={rest.type || 'submit'}
        width={size}
        {...rest}
      />
    );
  }
);

IconButton.defaultProps = {
  iconVariant: null,
  iconsSize: null,
  loading: null,
  size: '32px',
  startIcon: null,
};

export default IconButton;
