import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import styled from 'styled-components';

import Box from '../layout/Box';

const StyledDropdownContent = styled(Box)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  color: ${({ theme }) => theme?.colors.text};
  margin-top: 2.5rem;
  max-height: calc(90vh);
  min-width: ${({ minWidth }) => minWidth || '200px'};
  overflow-y: auto;
  position: absolute;
  z-index: 1;
`;

const StyledDropdown = styled(Box)`
  position: relative;
`;

const Dropdown = ({
  children,
  minWidth = '200px',
  footer,
  trigger,
  onCancel,
  onSubmit,
}) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const showFooter = onCancel || footer || onSubmit;

  return (
    <StyledDropdown isOpen={isOpen}>
      {typeof trigger === 'function' &&
        trigger({
          onClose: handleClose,
          onOpen: handleOpen,
          onToggle: handleToggle,
        })}

      {typeof trigger !== 'function' && trigger}

      {isOpen && (
        <Box ref={ref}>
          <StyledDropdownContent
            border={1}
            borderColor="fadedPrimary"
            minWidth={minWidth}
            top={0}
            right={0}
          >
            {children}

            {showFooter && (
              <Box
                display="flex"
                justifyContent="space-between"
                borderTop={1}
                mt={2}
                p={3}
              >
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  size="tag"
                  variant="outline"
                >
                  Close
                </button>
                <button onClick={() => setOpen(false)} type="button" size="tag">
                  Save
                </button>
              </Box>
            )}
          </StyledDropdownContent>
        </Box>
      )}
    </StyledDropdown>
  );
};

Dropdown.defaultProps = {
  body: <></>,
  buttonSize: 'sm',
  trigger: '',
};

export default Dropdown;