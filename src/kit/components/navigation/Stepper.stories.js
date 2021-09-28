import React from 'react';

import Box from '../layout/Box';

import Stepper from './Stepper';

export default {
  argTypes: {
    hideNumber: {
      control: { type: 'boolean' },
    },
    hideTail: {
      control: { type: 'boolean' },
    },
  },
  component: Stepper,
  title: 'Navigation/Stepper',
};

const Template = args => <Stepper {...args}>{args.children}</Stepper>;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  story => (
    <Box
      display="flex"
      alignItems="center"
      direction="row"
      justifyContent="center"
    >
      {story()}
    </Box>
  ),
];
