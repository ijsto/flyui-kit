import React from 'react';

import Tag from './Tag';

export default {
  argTypes: {
    color: {
      control: { type: 'text' },
      defaultValue: 'info',
    },
    endIcon: {
      control: { type: 'select' },
      options: ['edit', 'save'],
    },
    shape: {
      control: { type: 'radio' },
      options: ['squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    startIcon: {
      control: { type: 'select' },
      options: ['edit', 'save'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'neutral'],
    },
  },
  component: Tag,
  title: 'Data Display/Tag',
};

const Template = args => <Tag {...args}>{args.children}</Tag>;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  onClick: () => {
    // eslint-disable-next-line no-alert
    alert('Eeeny bonii bee buu bom.');
  },
  size: 'md',
};
