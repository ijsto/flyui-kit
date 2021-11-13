import React from 'react';

import IconButton from './IconButton';

export default {
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['edit', 'cancel', 'save'],
    },
    iconsSize: {
      control: { type: 'text' },
      description: 'Explicit Icon size',
    },
    loading: {
      control: { type: 'boolean' },

      description:
        'When `true`, replaces the label and the icons with the loading icon and `loadingLabel`, if provided.',
    },
    shape: {
      control: { type: 'inline-radio' },
      options: ['squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'outline'],
    },
  },
  component: IconButton,
  title: 'Data Entry/IconButton',
};

const Template = args => <IconButton {...args}>{args.icon}</IconButton>;

export const Default = Template.bind({});
Default.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
};

export const Primary = Template.bind({});
Primary.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
  variant: 'secondary',
};
export const Outline = Template.bind({});
Outline.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
  variant: 'outline',
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
};
