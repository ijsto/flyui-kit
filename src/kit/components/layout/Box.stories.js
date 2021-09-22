import React from 'react';

import Box from './Box';

export default {
  argTypes: {
    bg: {
      control: { type: 'select' },
      defaultValue: 'surface',
      options: ['primary', 'surface', 'background', '#efd3fc', 'goldenrod'],
    },
    border: {
      control: { type: 'number' },
      defaultValue: '1',
    },
    borderColor: {
      control: { type: 'text' },
      defaultValue: 'primary',
    },
    borderRadius: {
      control: { type: 'text' },
      defaultValue: '1',
    },
    display: {
      control: { type: 'select' },
      defaultValue: 'block',
      options: ['block', 'flex', 'inline-block', 'inline-flex'],
    },
    m: 3,
    my: 3,
    p: 3,
    py: 3,
  },
  component: Box,
  title: 'Layout/Box',
};

const Template = args => (
  <Box {...args}>{args.children || 'Box - a better div.'}</Box>
);

export const Lonely = Template.bind({});
Lonely.args = {
  p: 3,
};
