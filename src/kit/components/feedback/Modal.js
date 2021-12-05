import React from 'react';
import FocusTrap from 'focus-trap-react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { css } from 'styled-components';
import {
  border,
  borderRadius,
  color,
  flexbox,
  layout,
  grid,
  space,
  position,
} from 'styled-system';

import IconButton from '../data-entry/IconButton';
import Box from '../layout/Box';

const StyledContainer = styled(Box)`
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledMotionBackdrop = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledMotionModal = styled(motion.div)(
  ({ theme, radius }) => css`
    background: ${`var(--color-surface, ${
      theme.surface.background || 'white'
    })`};
    border-radius: ${radius ??
    `var(--radius-surface, ${`${theme.radii[radius] || 8}`}px)`};
    max-width: 50%;
    max-height: 80vh;
    min-height: 24px;
    width: 600px;
    margin: 3rem auto;
    height: auto;
    ${border};
    ${borderRadius};
    ${color};
    ${flexbox};
    ${grid};
    ${space};
    ${layout};
    ${position};
  `
);

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modal = {
  hidden: { opacity: 0, y: -1 },
  visible: { opacity: 1, transition: { delay: 0.125 }, y: 0.5 },
};

const Modal = ({ children, isOpen, onClose, radius, ...rest }) => (
  <AnimatePresence exitBeforeEnter>
    {isOpen && (
      <StyledContainer>
        <FocusTrap
          active={isOpen}
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            returnFocusOnDeactivate: true,
          }}
        >
          <div>
            <StyledMotionBackdrop
              animate="visible"
              transition={{ duration: 0.125 }}
              exit="hidden"
              initial="hidden"
              onClick={onClose && (() => onClose())}
              variants={backdrop}
              tabIndex={0}
            />

            <Box position="absolute" top="0" right="0" p={3}>
              <IconButton
                icon="cancel"
                onClick={onClose && (() => onClose())}
                variant="ghost"
              />
            </Box>

            <Box>
              <StyledMotionModal
                animate="visible"
                transition={{ duration: 0.125 }}
                exit="hidden"
                initial="hidden"
                radius={radius}
                variants={modal}
                {...rest}
              >
                <>{children}</>
              </StyledMotionModal>
            </Box>
          </div>
        </FocusTrap>
      </StyledContainer>
    )}
  </AnimatePresence>
);

Modal.defaultProps = {
  radius: 'md',
};
export default Modal;
