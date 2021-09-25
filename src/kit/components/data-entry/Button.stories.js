import React from 'react';

import Stack from '../layout/Stack';
import Button from './Button';

export default {
  argTypes: {
    endIcon: {
      control: { type: 'select' },
      description: 'Adds an icon to end',
      options: ['edit', 'cancel', 'save'],
    },
    hoverAnimation: {
      control: { type: 'select' },
      options: ['lift-low', 'lift', 'lift-high'],
    },
    labelDisplay: {
      control: { type: 'object' },
      defaultValue: 'block',
      description:
        'This can be either a string (`block`, `none`, `inline` etc) or an array that will apply the display value to the label based on the breakpoint. This is useful to hide the button label on certain screen sizes. Example: `["none", "block"]` will hide the label on mobile.',
    },
    loading: {
      control: { type: 'boolean' },
      defaultValue: false,
      description:
        'When `true`, replaces the label and the icons with the loading icon and `loadingLabel`, if provided.',
    },
    shape: {
      control: { type: 'inline-radio' },
      options: ['squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    startIcon: {
      control: { type: 'select' },
      options: ['edit', 'cancel', 'save'],
    },
    typography: {
      control: { type: 'inline-inline-radio' },
      options: ['serif', 'sans-serif', 'mono'],
    },
    unstyled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    variant: {
      control: { type: 'inline-radio' },
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

export const ButtonGroup = Template.bind({});
ButtonGroup.decorators = [
  story => (
    <Stack direction="row">
      {story()}
      {story()}
      {story()}
    </Stack>
  ),
];
ButtonGroup.args = {
  href: '#clicked-Default',
  label: 'Default Button',
};
