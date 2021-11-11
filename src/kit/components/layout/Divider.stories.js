import React from 'react';
import Box from './Box';

import Divider from './Divider';

export default {
  argTypes: {
    color: {
      control: { type: 'color' },
      defaultValue: '#f02ff0',
    },
    size: {
      control: { type: 'text' },
      defaultValue: '1px',
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'solid',
      options: ['dashed', 'dotted', 'double', 'solid'],
    },
  },
  component: Divider,
  title: 'Layout/Divider',
};

const Template = args => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};

Vertical.decorators = [
  story => (
    <Box display="flex" height="42px" alignItems="center">
      {story()}
    </Box>
  ),
];
