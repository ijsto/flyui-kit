import React, { Fragment } from 'react';

const DynamicComponent = ({ children, Component, ...rest }) => {
  const NormalizedComponent = Component || Fragment;
  return <NormalizedComponent {...rest}>{children}</NormalizedComponent>;
};

export default DynamicComponent;
