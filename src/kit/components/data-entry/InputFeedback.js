import React from 'react';

import Text from '../data-display/Text';

const InputFeedback = ({ description, error, required, ...props }) => (
  <Text color={error && 'error'} pt={1} size="sm" {...props} error={error}>
    {error || description || (required && 'required')}
  </Text>
);

export default InputFeedback;
