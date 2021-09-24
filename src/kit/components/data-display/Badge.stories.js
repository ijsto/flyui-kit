import React from 'react';

import Avatar from './Avatar';
import Badge from './Badge';

export default {
  argTypes: {
    align: {
      control: { type: 'check' },
      defaultValue: true,
      options: ['left', 'bottom', 'right', 'top'],
    },
    color: {
      control: { type: 'text' },
      defaultValue: 'info',
    },
    isVisible: {
      control: { type: 'boolean' },
      defaultValue: true,
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
