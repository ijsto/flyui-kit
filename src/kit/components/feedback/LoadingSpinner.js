import React from 'react';

import SVG from '../data-display/SVG';
import { renderIcon } from '../../utils/icons';

// Use this in components where <SVG /> is already loaded
// and is rendering pure SVG icons.
export const LoadingSpinnerIcon = () => renderIcon('loading');

// Use this in components all other instances
// where we need to apply svg styles.
const LoadingSpinner = ({ size, ...rest }) => (
  <SVG size={size} icon={<LoadingSpinnerIcon />} {...rest} />
);

export default LoadingSpinner;
