import React from 'react';

import Cardinal from './Cardinal';

export default {
  argTypes: {
    align: {
      control: { type: 'radio' },
      defaultValue: true,
      options: ['left', 'center', 'right'],
    },
    size: {
      control: { type: 'select' },
      defaultValue: true,
      options: ['sm', 'md', 'lg'],
    },
  },
  component: Cardinal,
  title: 'Data Display/Cardinal',
};

const Template = args => <Cardinal {...args}>{args.children}</Cardinal>;

export const Default = Template.bind({});
Default.args = {
  align: 'left',
  body: 'Cheer or birdie, birdie',
  head: 'Cardinal',
  size: 'md',
};
