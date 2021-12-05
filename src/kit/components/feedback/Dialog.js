import React from 'react';

import Text from '../data-display/Text';
import Button from '../data-entry/Button';

import Box from '../layout/Box';
import Modal from './Modal';

const Dialog = ({
  children,
  isOpen,
  onClose,
  isLoading,
  loadingComponent,
  title,
  onSubmit,
  ...rest
}) => {
  const handleSubmit = () => {
    onSubmit();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {isLoading ? (
        loadingComponent || 'Loading...'
      ) : (
        <Box {...rest}>
          <Text as="h4" size="2xl" mb={3}>
            {title}
          </Text>

          {children}

          <Box display="flex" gap={2}>
            <Button onClick={handleSubmit} variant="primary">
              Confirm
            </Button>

            <Button onClick={handleClose} variant="outline">
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};

export default Dialog;
