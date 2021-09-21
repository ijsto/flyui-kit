import React from 'react';

import Box from './Box';

export default {
  argTypes: {
    endIcon: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
  },
  component: Box,
  title: 'Layout/Box',
};

const Template = args => (
  <Box {...args}>{args.children || 'Box - a better div.'}</Box>
);

export const Basic = Template.bind({});
Basic.args = {
  p: 3,
};

export const Border = Template.bind({});
Border.args = {
  ...Basic.args,
  border: 1,
  children: 'Bordered 1.',
};

export const BorderRadius = Template.bind({});
BorderRadius.args = {
  ...Border.args,
  borderRadius: '3',
  children: 'Radius "3".',
};

export const ThemedBackground = Template.bind({});
ThemedBackground.args = {
  ...Basic.args,
  bg: 'background',
  children: 'Background "background".',
};

export const CSSBackground = Template.bind({});
CSSBackground.args = {
  ...Basic.args,
  bg: 'salmon',
  children: 'Background "salmon".',
};

export const RoundedBackground = Template.bind({});
RoundedBackground.args = {
  ...Basic.args,
  bg: 'salmon',
  borderRadius: 3,
  children: 'Background "salmon".',
};
