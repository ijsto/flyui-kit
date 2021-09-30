import React from 'react';

import Stepper, { Step } from './Stepper';

export default {
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      currentStep: { type: 'number' },
      options: ['vertical', 'horizontal'],
    },
  },
  component: Stepper,
  title: 'Navigation/Stepper',
};

const Template = args => (
  <Stepper {...args} completedStepIds={[0, 3]}>
    <Step stepId={0} description="Has no title" isStarted />

    <Step stepId={1} title="[isCompleted] No description" isCompleted />
    <Step
      stepId={2}
      title="Lol"
      size="24px"
      description="[isCurrent] Nothing compares to"
      isCurrent
    />
    <Step stepId={3} title="Lol" description="Nothing compares to" />
  </Stepper>
);

export const Default = Template.bind({});
Default.args = {
  badgeSize: '32px',
  currentStep: 3,
  hideNumber: false,
  hideTail: false,
};
