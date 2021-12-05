import React, { useState } from 'react';
import FocusTrap from 'focus-trap-react';
import { Popover as ReactTinyPopover } from 'react-tiny-popover';
import Box from '../layout/Box';

const Popover = ({
  Component,
  children,
  id,
  isOpen: isOpenProp,
  onClose,
  onOpen,
  positions,
  trigger,
  ...rest
}) => {
  const [isInternalOpen, setInternalOpen] = useState(false);

  const isOpen = isOpenProp || isInternalOpen;

  const popoverId = isOpen ? id : undefined;

  const handleClose = () => {
    if (onClose) return onClose();
    return setInternalOpen(false);
  };
  const handleOpen = () => {
    if (onOpen) return onOpen();
    return setInternalOpen(true);
  };

  return (
    <ReactTinyPopover
      isOpen={isOpen}
      positions={positions} // preferred positions by priority
      onClickOutside={handleClose} // handle click events outside of the popover/target here!
      content={
        // @TODO: Add ESC key handler to close the popover
        <FocusTrap
          active={isOpen}
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            returnFocusOnDeactivate: true,
          }}
        >
          <Box {...rest} id={popoverId}>
            {children}
          </Box>
        </FocusTrap>
      }
    >
      <Component aria-describedby={popoverId} onClick={handleOpen}>
        {trigger}
      </Component>
    </ReactTinyPopover>
  );
};

Popover.defaultProps = {
  Component: 'div',
  id: 'fly-popover',
  isOpen: false,
  positions: ['bottom', 'top', 'left', 'right'],
};

export default Popover;
