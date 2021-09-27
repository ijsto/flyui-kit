import React from 'react';

import Stack from '../layout/Stack';
import Button from './Button';
import Input from './Input';

export default {
  argTypes: {
    block: {
      control: { type: 'boolean' },
      description: 'Makes the button full-width',
    },
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

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
  variant: 'secondary',
};
export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
  variant: 'outline',
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled Button',
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked!'),
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  label: 'Outline Button',
  variant: 'outline',
  width: '100%',
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
  label: 'Default Button',
};

export const WithInput = Template.bind({});
WithInput.decorators = [
  story => {
    const { shape, size } = story().props;
    return (
      <Stack alignItems="center" direction="row">
        <Input
          description="Info text"
          label="Input label"
          size={size}
          shape={shape}
        />
        <Input
          placeholder="Another Input"
          label="Another Input label"
          size={size}
          shape={shape}
        />
        {story()}
      </Stack>
    );
  },
];
WithInput.args = {
  href: '#clicked-Default',
  label: 'Default Button',
};
