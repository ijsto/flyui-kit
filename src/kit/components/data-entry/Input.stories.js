import React from 'react';

import Input from './Input';

export default {
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['edit', 'cancel', 'save'],
    },
    size: {
      control: { type: 'radio' },
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
