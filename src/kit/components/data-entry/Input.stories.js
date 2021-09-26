import React from 'react';

import Input from './Input';

export default {
  argTypes: {
    shape: {
      control: { type: 'inline-radio' },
      options: ['squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    startIcon: {
      control: { type: 'text' },
      description:
        'By default it accepts name of a [FontAwesome Icon `V6`](https://fontawesome.com/v6.0/icons). We currently do not support all icons, only a small subset. This may change in the future. If have a suggestion/request, [please open a feature request](https://github.com/ijsto/flyui-kit/issues/new).',
      table: { defaultValue: { summary: 'null' } },
    },
  },
  component: Input,
  title: 'Data Entry/Input',
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'This input will show you!',
  error: '',
  label: 'Default Input',
};

export const Disabled = Template.bind({});
Disabled.args = {
  description: 'Is not editable',
  disabled: true,
  error: '',
  label: 'Disabled Input',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  description: 'Input with a start icon',
  error: '',
  placeholder: 'Nifty bit',
  startIcon: 'user',
};
