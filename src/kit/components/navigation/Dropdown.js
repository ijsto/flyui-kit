import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import styled from 'styled-components';

import Button from '../data-entry/Button';
import Box from '../layout/Box';

const StyledDropdownContent = styled(Box)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  color: ${({ theme }) => theme?.colors.text};
  margin-top: 2.5rem;
  max-height: calc(90vh);
  min-width: 280px;
  overflow-y: auto;
  position: absolute;
  left: 0;
  z-index: 1;
`;

const StyledDropdown = styled(Box)`
  position: relative;
`;

const Dropdown = ({ body, buttonSize, footer, label, onCancel, onSubmit }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const showFooter = onCancel || footer || onSubmit;

  return (
    <StyledDropdown isOpen={isOpen}>
      <Button onClick={() => setOpen(!isOpen)} type="button" size={buttonSize}>
        {label}
      </Button>

      {isOpen && (
        <Box ref={ref}>
          <StyledDropdownContent border={1} borderColor="fadedPrimary" top={0}>
            {body}

            {showFooter && (
              <Box
                display="flex"
                justifyContent="space-between"
                borderTop={1}
                mt={2}
                p={3}
              >
                <Button
                  onClick={() => setOpen(false)}
                  type="button"
                  size="tag"
                  variant="outline"
                >
                  Close
                </Button>
                <Button onClick={() => setOpen(false)} type="button" size="tag">
                  Save
                </Button>
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
  label: '',
};

export default Dropdown;
