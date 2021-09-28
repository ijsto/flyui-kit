import React from 'react';

import Popover from './Popover';

export default {
  argTypes: {
    border: {
      control: { type: 'text' },
    },
    p: {
      control: { type: 'text' },
    },
    placement: {
      control: { type: 'inline-radio' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    trigger: {
      control: { type: 'inline-radio' },
      options: ['click', 'focus', 'hover'],
    },
  },
  component: Popover,
  title: 'Navigation/Popover',
};

const Template = args => <Popover {...args}>{args.children}</Popover>;

export const Default = Template.bind({});
Default.args = {
  label: 'Popover Label',
  placement: 'bottom',
};
