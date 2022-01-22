import React from 'react';
import styled from 'styled-components';

import Box from '../layout/Box';

const StyledAlert = styled(Box)`
  background: ${({ status, theme }) => theme.colors[status]};
  display: flex;
`;

const Alert = ({ children, ...rest }) => {
  const getFontColor = () => {
    switch (rest.status) {
      case 'success':
        return 'white';

      default:
        return 'white';
    }
  };

  return (
    <StyledAlert p={3} color={getFontColor()} {...rest}>
      {children}
    </StyledAlert>
  );
};

Alert.defaultProps = {
  borderRadius: 'sm',
  status: 'info',
};

export default Alert;
