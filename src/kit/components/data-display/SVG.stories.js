import React from 'react';

import SVG from './SVG';

export default {
  argTypes: {
    color: {
      control: { type: 'text' },
      defaultValue: 'info',
    },
    icon: {
      control: { type: 'select' },
      defaultValue: 'user',
      options: ['save', 'cancel', 'facebook', 'user'],
    },
    size: {
      control: { type: 'text' },
      defaultValue: '32px',
    },
  },
  component: SVG,
  title: 'Data Display/SVG',
};

const Template = args => <SVG {...args} />;

export const Default = Template.bind({});
Default.args = {};
