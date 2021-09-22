import React from 'react';

import Stack from '../layout/Stack';
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
      defaultValue: false,
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
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
};

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  href: '#clicked-Default',
  label: 'Default Button',
};

export const MultipleInRow = Template.bind({});
MultipleInRow.decorators = [
  story => (
    <Stack direction="row">
      {story()}
      {story()}
      {story()}
    </Stack>
  ),
];
MultipleInRow.args = {
  href: '#clicked-Default',
  label: 'Default Button',
};
