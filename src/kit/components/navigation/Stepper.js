import React from 'react';
import styled from 'styled-components';

import SVG from '../data-display/SVG';
import Text from '../data-display/Text';
import Dot from '../feedback/Dot';
import Box from '../layout/Box';

const StyledHorizontalTail = styled(Box)`
  flex: 1 1 auto;
  height: 0;
  left: calc(-50% + ${({ badgeSize }) => badgeSize});
  position: absolute;
  right: calc(50% + ${({ badgeSize }) => badgeSize});
  top: calc(${({ badgeSize }) => badgeSize} / 2);
  border: 1px solid;
  border-radius: 99px;
`;

const HorizontalStep = ({
  badgeSize,
  description,
  hideNumber,
  icon,
  isCompleted: isExplicitlyCompleted,
  isCompletedInArray,
  isCurrent,
  isStarted,
  hideTail = false,
  stepNumber,
  title,
}) => {
  const isCompleted = isExplicitlyCompleted || isCompletedInArray;
  const isUntouched = !isCompleted && !isStarted && !isCurrent;
  const showTail = !hideTail && parseInt(stepNumber, 10) !== 1;

  const badgeVariant = isUntouched || isCurrent ? 'outline' : 'filled';
  const badgeColor = isCompleted
    ? 'success'
    : isStarted
    ? 'info'
    : isCurrent
    ? 'info'
    : isUntouched && 'gray';

  const badgeLabel = isCompleted ? (
    <SVG
      icon="check"
      color={badgeVariant === 'outline' ? badgeColor : 'white'}
    />
  ) : (
    !hideNumber && stepNumber
  );

  return (
    <Box alignSelf="flex-start" flex={1} position="relative" px={3}>
      <Box display="flex" alignItems="center" flexDirection="column">
        {icon || (
          <Box p={1}>
            <Dot variant={badgeVariant} size={badgeSize} color={badgeColor}>
              {badgeLabel}
            </Dot>
          </Box>
        )}

        <Box mt={2}>
          <Text p={0} m={0} variant="h5">
            {title || `Step ${stepNumber}`}
          </Text>
          {description && <Text variant="caption">{description}</Text>}
        </Box>
      </Box>

      {showTail && (
        <StyledHorizontalTail
          borderColor={isUntouched && 'gray'}
          badgeSize={badgeSize}
        />
      )}
    </Box>
  );
};

const VerticalStep = ({
  badgeSize,
  body,
  description,
  hideNumber,
  icon,
  isCompleted: isExplicitlyCompleted,
  isCompletedInArray,
  isCurrent,
  isStarted,
  hideTail = false,
  stepNumber,
  isLast,
  title,
}) => {
  const isCompleted = isExplicitlyCompleted || isCompletedInArray;
  const isUntouched = !isCompleted && !isStarted && !isCurrent;
  const showTail = !hideTail && !isLast;

  const badgeVariant = isUntouched || isCurrent ? 'outline' : 'filled';
  const badgeColor = isCompleted
    ? 'success'
    : isStarted
    ? 'info'
    : isCurrent
    ? 'info'
    : isUntouched && 'gray';

  const badgeLabel = isCompleted ? (
    <SVG
      icon="check"
      color={badgeVariant === 'outline' ? badgeColor : 'white'}
    />
  ) : (
    !hideNumber && stepNumber
  );

  return (
    <Box position="relative" px={3}>
      <Box display="flex" alignItems="center">
        <Box pl={1} pr={3} py={2}>
          {icon || (
            <Dot variant={badgeVariant} size={badgeSize} color={badgeColor}>
              {badgeLabel}
            </Dot>
          )}
        </Box>

        <Box>
          <Text p={0} m={0} variant="h5">
            {title || `Step ${stepNumber}`}
          </Text>
          {description && <Text variant="caption">{description}</Text>}
        </Box>
      </Box>

      <Box
        borderLeft={showTail && 1}
        borderColor={isUntouched && 'gray'}
        minHeight="12px"
        ml={badgeSize}
        pl={3}
      >
        {body && (
          <Box pl={1} pt={2} pb={3}>
            {body}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export const Step = ({ direction, ...rest }) => {
  if (direction === 'vertical') return <VerticalStep {...rest} />;

  return <HorizontalStep {...rest} />;
};

const Stepper = ({
  children,
  direction,
  // currentStep currently relies on it being a value of `id` or a `slug`.
  // In future we may add more intelligent handling of accepting an object that
  // first checks for `slug`, then `id` and then fallbacks to the currentStep itself (if it's not an object).
  currentStep,
  // User provided array of completed steps
  completedStepIds = [],
  ...rest
}) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    const { stepId } = child.props;
    const isStepIdValid =
      typeof stepId === 'number' || typeof stepId === 'string';

    if (!isStepIdValid)
      throw new Error(
        'The `stepId` prop is either missing or is not a number or a string.'
      );
    if (!Array.isArray(completedStepIds))
      throw new Error(
        '`completedStepIds` must be an array of `stepId` values.'
      );

    const isCompletedInArray = completedStepIds.includes(stepId);

    return React.cloneElement(child, {
      direction,
      index,
      isCompletedInArray,
      isCurrent: currentStep === stepId,
      isLast: index + 1 === children.length,
      stepNumber: index + 1,
      ...rest,
    });
  });

  if (direction === 'vertical')
    return (
      <Box display="flex" flexDirection="column">
        {childrenWithProps}
      </Box>
    );

  return (
    <Box
      display="flex"
      alignItems="center"
      direction="row"
      justifyContent="center"
    >
      {childrenWithProps}
    </Box>
  );
};

export default Stepper;
