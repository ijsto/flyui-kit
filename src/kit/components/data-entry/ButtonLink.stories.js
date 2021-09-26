import React from 'react';
import ButtonLink from './ButtonLink';

export default {
  argTypes: {
    endIcon: {
      control: { type: 'select' },
      description: 'Adds an icon to end',
      options: ['edit', 'cancel', 'save'],
    },
    hoverEffects: {
      control: { type: 'multi-select' },
      description:
        'A string of the type of effects you want to add to the button hover action. For example, "lift-high shadow-large" or "lift-low shadow-low".',
      options: [
        'lift-low',
        'lift',
        'lift-high',
        'shadow',
        'shadow-large',
        'shadow-low',
      ],
      table: { defaultValue: { summary: 'lift shadow' } },
    },
    iconsSize: {
      control: { type: 'text' },
      description: '',
      table: { defaultValue: { summary: '14px' } },
    },
    labelDisplay: {
      control: { type: 'object' },
      defaultValue: 'block',
      description:
        'This can be either a string (`block`, `none`, `inline` etc) or an array that will apply the display value to the label based on the breakpoint. This is useful to hide the button label on certain screen sizes. Example: `["none", "block"]` will hide the label on mobile.',
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
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'outline'],
    },
  },
  component: ButtonLink,
  title: 'Data Entry/ButtonLink',
};

const Template = args => <ButtonLink {...args}>{args.label}</ButtonLink>;

export const Default = Template.bind({});
Default.args = {
  href: '#clicked-a-link',
  label: 'Internal ButtonLink',
};

export const External = Template.bind({});
External.args = {
  href: 'https://ijs.to',
  label: 'Local ButtonLink',
  target: '_blank',
};

export const Outline = Template.bind({});
Outline.args = {
  href: '#clicked-a-link',
  label: 'Outline ButtonLink',
  variant: 'outline',
};
