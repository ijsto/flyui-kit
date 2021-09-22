import React from 'react';

import Button from './Button';

export default {
  argTypes: {
    endIcon: {
      control: { type: 'select' },
      options: ['edit', 'cancel', 'save'],
    },
    shape: {
      control: { type: 'radio' },
      options: ['squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    startIcon: {
      control: { type: 'select' },
      options: ['edit', 'cancel', 'save'],
    },
    unstyled: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline'],
    },
  },
  component: Button,
  title: 'Data Entry/Button',
};

const Template = args => <Button {...args}>{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  onClick: () => alert('Clicked!'),
};

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  href: '#clicked-Default',
  label: 'Default Button',
};
