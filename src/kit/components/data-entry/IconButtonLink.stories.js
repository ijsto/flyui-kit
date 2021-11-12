import React from 'react';

import IconButtonLink from './IconButtonLink';

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
      defaultValue: '24px',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'outline'],
    },
  },
  component: IconButtonLink,
  title: 'Data Entry/IconButtonLink',
};

const Template = args => <IconButtonLink {...args}>{args.icon}</IconButtonLink>;

export const Default = Template.bind({});
Default.args = {
  href: '#clicked-a-link',
};

export const External = Template.bind({});
External.args = {
  href: 'https://ijs.to',
  target: '_blank',
};

export const Outline = Template.bind({});
Outline.args = {
  href: '#clicked-a-link',
  variant: 'outline',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  variant: 'outline',
  width: '100%',
};
