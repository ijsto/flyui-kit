import React from 'react';

import Button from '../data-entry/Button';
import Text from '../data-display/Text';

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
    triggerOn: {
      control: { type: 'inline-radio' },
      options: [
        'click',
        'click focus',
        'click focus mouseenter',
        'focus',
        'mouseenter focus',
        'mouseenter',
      ],
    },
  },
  component: Popover,
  title: 'Navigation/Popover',
};

const Template = args => <Popover {...args}>{args.label}</Popover>;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Popover a text component</Text>,
  label: 'Popover Label',
  placement: 'bottom',
  trigger: <Button>Popover Button</Button>,
};
