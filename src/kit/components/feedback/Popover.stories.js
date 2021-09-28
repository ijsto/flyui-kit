import React from 'react';

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

const Template = args => <Popover {...args}>{args.children}</Popover>;

export const Default = Template.bind({});
Default.args = {
  children: <Text>{`Text />`} component inside a popover</Text>,
  placement: 'bottom',
  trigger: 'Plain string with a Popover',
};
