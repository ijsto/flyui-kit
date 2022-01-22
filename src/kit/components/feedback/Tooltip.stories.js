import React from 'react';

import Text from '../data-display/Text';

import Tooltip from './Tooltip';

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
  component: Tooltip,
  title: 'Navigation/Tooltip',
};

const Template = args => <Tooltip {...args}>{args.children}</Tooltip>;

export const Default = Template.bind({});
Default.args = {
  children: <Text>{`Text />`} component inside a Tooltip</Text>,
  placement: 'bottom',
  trigger: 'Plain string with a Tooltip',
};
