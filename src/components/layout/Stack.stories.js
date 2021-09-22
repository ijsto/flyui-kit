import React from 'react';
import Box from './Box';

import Stack from './Stack';

export default {
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['row', 'column'],
    },
    space: {
      control: { type: 'text' },
      defaultValue: '3',
    },
  },
  component: Stack,
  title: 'Layout/Stack',
};

const Template = args => (
  <Stack {...args}>{args.children || 'Stack - a better div.'}</Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <>
      <Box borderRadius={2} p={2} bg="orange" />
      <Box borderRadius={2} p={2} bg="beige" />
      <Box borderRadius={2} p={2} bg="rebeccapurple" />
    </>
  ),
  p: 2,
};
