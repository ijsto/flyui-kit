import React from 'react';

import Input from './Input';

export default {
  argTypes: {
    icon: {
      control: { type: 'select' },
    },
    shape: {
      control: { type: 'inline-radio' },
      options: ['squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
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

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  description: 'Input with a start icon',
  error: '',
  placeholder: 'Nifty bit',
  startIcon: 'user',
};
