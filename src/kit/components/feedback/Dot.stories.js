import React from 'react';

import Dot from './Dot';

export default {
  argTypes: {
    color: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['outline', 'filled'],
    },
  },
  component: Dot,
  title: 'Navigation/Dot',
};

const Template = args => <Dot {...args}>{args.children}</Dot>;

export const Default = Template.bind({});
Default.args = {
  children: 2,
  color: 'success',
  size: '24px',
};
