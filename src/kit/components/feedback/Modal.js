import React from 'react';
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

import Box from '../layout/Box';

const MotionBox = motion.div;

const StyledContainer = styled(Box)`
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledMotionBackdrop = styled(MotionBox)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledMotionModal = styled(MotionBox)(
  ({ theme }) => css`
    background: ${`var(--surface-color-background, ${
      theme.surface.background || 'white'
    })`};
    border-radius: ${`var(--surface-radius, ${theme.radius.md || 8}px)`};
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

const Modal = ({ children, isOpen, onClose, ...rest }) => (
  <AnimatePresence exitBeforeEnter>
    {isOpen && (
      <StyledContainer>
        <StyledMotionBackdrop
          animate="visible"
          transition={{ duration: 0.125 }}
          exit="hidden"
          initial="hidden"
          onClick={onClose && (() => onClose())}
          variants={backdrop}
        />

        <Box>
          <StyledMotionModal
            animate="visible"
            transition={{ duration: 0.125 }}
            exit="hidden"
            initial="hidden"
            variants={modal}
            {...rest}
          >
            <>{children}</>
          </StyledMotionModal>
        </Box>
      </StyledContainer>
    )}
  </AnimatePresence>
);

export default Modal;
