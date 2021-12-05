import React from 'react';

export function getValidChildren(children) {
  return React.Children.toArray(children).filter(child =>
    React.isValidElement(child)
  );
}
