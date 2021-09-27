import React from 'react';

import Dropdown from './Dropdown';

export default {
  argTypes: {
    color: {
      control: { type: 'text' },
      defaultValue: 'info',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    endIcon: {
      control: { type: 'select' },
      options: ['edit', 'save'],
    },
    shape: {
      control: { type: 'radio' },
      options: ['squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    startIcon: {
      control: { type: 'select' },
      options: ['edit', 'save'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'neutral'],
    },
  },
  component: Dropdown,
  title: 'Navigation/Dropdown',
};

const Template = args => <Dropdown {...args}>{args.children}</Dropdown>;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  onClick: null,
  size: 'md',
};
