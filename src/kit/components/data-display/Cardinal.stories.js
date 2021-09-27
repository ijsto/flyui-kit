import React from 'react';

import Cardinal from './Cardinal';

export default {
  argTypes: {
    align: {
      control: { type: 'radio' },
      defaultValue: true,
      options: ['left', 'center', 'right'],
    },
    bodyVariant: {
      control: { type: 'inline-radio' },
      defaultValue: true,
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'caption', 'eyebrow'],
    },
    headVariant: {
      control: { type: 'inline-radio' },
      defaultValue: true,
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'caption', 'eyebrow'],
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
