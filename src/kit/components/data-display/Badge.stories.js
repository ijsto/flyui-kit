import React from 'react';

import Avatar from './Avatar';
import Badge from './Badge';

export default {
  argTypes: {
    align: {
      control: { type: 'check' },
      options: ['left', 'bottom', 'right', 'top'],
    },
    color: {
      control: { type: 'text' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'dot'],
    },
  },
  component: Badge,
  title: 'Data Display/Badge',
};

const Template = args => <Badge {...args}>{args.children}</Badge>;

export const Default = Template.bind({});
Default.args = {
  align: 'right-top',
  body: '2',
  children: (
    <Avatar shape="rounded" src="https://source.unsplash.com/92x92/?portrait" />
  ),
  size: 'md',
};
