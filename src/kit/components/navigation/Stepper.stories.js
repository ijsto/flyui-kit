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
  <Stepper {...args} completedSteps={[0, 3]}>
    <Step description="Has no title" isStarted />

    <Step title="[isCompleted] No description" isCompleted />
    <Step
      title="Lol"
      size="24px"
      description="[isCurrent] Nothing compares to"
      isCurrent
    />
    <Step title="Lol" description="Nothing compares to" />
  </Stepper>
);

export const Default = Template.bind({});
Default.args = {
  badgeSize: '32px',
  currentStep: 3,
  hideNumber: false,
  hideTail: false,
};
