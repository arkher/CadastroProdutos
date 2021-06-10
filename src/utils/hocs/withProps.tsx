import React from 'react';

/* eslint-disable react/jsx-props-no-spreading */
export function withProps<T>(props: T) {
  return (
    Component: React.ComponentType<T>,
  ): React.ComponentType<T> => otherProps => (
    <Component {...props} {...otherProps} />
  );
}
