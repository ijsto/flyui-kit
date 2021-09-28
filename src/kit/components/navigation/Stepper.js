import React from 'react';
import styled, { css } from 'styled-components';

import Text from '../data-display/Text';
import Box from '../layout/Box';

const StyledCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] || color : theme.colors.primary};
`;

const StyledContainer = styled(Box)`
  position: relative;

  ${({ isCompleted, isCurrent, isStarted, isUntouched, theme }) => {
    if (isCompleted) {
      return css`
        color: ${theme.colors.success};

        ${StyledCircle} {
          background: ${theme.colors.success};
          color: black;
        }
      `;
    }
    if (isCurrent) {
      return css`
        color: ${theme.colors.primary};

        ${StyledCircle} {
          background: ${theme.colors.primary};
          color: black;
        }
      `;
    }
    if (isStarted) {
      return css`
        color: ${theme.colors.info};

        ${StyledCircle} {
          background: ${theme.colors.info};
          color: black;
        }
      `;
    }

    if (isUntouched) {
      return css`
        color: gray;
        opacity: 0.75;

        ${StyledCircle} {
          background: gray;
          color: black;
        }
      `;
    }

    return css`
      color: gray;
      color: black;
    `;
  }}
`;

const StyledTail = styled(Box)`
  flex: 1 1 auto;
  height: 2px;
  left: calc(-50% + 16px);
  position: absolute;
  right: calc(50% + 16px);
  top: 10px;
`;

const Step = ({
  hideNumber,
  icon,
  index,
  isCompleted,
  isCurrent,
  isStarted,
  hideTail,
}) => {
  const isUntouched = !isCompleted && !isStarted && !isCurrent;
  const showTail = !hideTail && parseInt(index, 10) !== 0;

  return (
    <StyledContainer
      flex={1}
      px={3}
      isCompleted={isCompleted}
      isCurrent={isCurrent}
      isStarted={isStarted}
      isUntouched={isUntouched}
    >
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box p={1}>
          {icon || <StyledCircle>{!hideNumber && index}</StyledCircle>}
        </Box>

        <Box mt={2}>
          <Text p={0} m={0} variant="h5">
            Title {index}
          </Text>
          <Text variant="caption">Des Description</Text>
        </Box>
      </Box>

      {showTail && (
        <StyledTail borderTop={2} borderColor={isUntouched && 'gray'} />
      )}
    </StyledContainer>
  );
};

const Stepper = ({ hideNumber, hideTail }) => (
  <Box display="flex" alignItems="flex-start" width="100%" p={5}>
    <Step hideNumber={hideNumber} hideTail={hideTail} index={0} isStarted />
    <Step hideNumber={hideNumber} hideTail={hideTail} index={1} isCompleted />
    <Step hideNumber={hideNumber} hideTail={hideTail} index={2} isCurrent />
    <Step hideNumber={hideNumber} hideTail={hideTail} index={3} />
    <Step hideNumber={hideNumber} hideTail={hideTail} index={4} />
  </Box>
);

export default Stepper;
