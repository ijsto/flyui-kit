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
    <Avatar
      shape="rounded"
      src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1326&q=80"
    />
  ),
  size: 'md',
};
