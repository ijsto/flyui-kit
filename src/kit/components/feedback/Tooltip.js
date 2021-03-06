import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';
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

import styled, { css } from 'styled-components';
import { getRadius } from '../../utils/sizing';

const StyledTippyContainer = styled(motion.div)(
  ({ radius, theme }) => css`
    background-color: ${`var(--color-popover, ${
      theme.popover?.background || 'white'
    })`};
    border-radius: ${getRadius({ radius, theme })};

    padding: 4px 8px;
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

const Popover = ({ children, placement, trigger, triggerOn, ...rest }) => {
  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  const onMount = () => {
    scale.set(1);
    opacity.set(1);
  };

  const onHide = ({ unmount }) => {
    const cleanup = scale.onChange(value => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  };

  return (
    <Tippy
      placement={placement}
      trigger={triggerOn}
      render={attrs => (
        <StyledTippyContainer
          style={{ opacity, scale }}
          border={1}
          {...attrs}
          {...rest}
        >
          {children}
        </StyledTippyContainer>
      )}
      animation
      onMount={onMount}
      onHide={onHide}
    >
      {typeof trigger === 'string' ? (
        <div style={{ display: 'inline-block' }}>{trigger}</div>
      ) : (
        trigger
      )}
    </Tippy>
  );
};

Popover.defaultProps = {
  placement: 'top',
  radius: 'sm',
  triggerOn: 'mouseenter focus',
};
export default Popover;
