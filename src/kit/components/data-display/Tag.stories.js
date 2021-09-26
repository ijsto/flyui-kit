import React from 'react';

import Tag from './Tag';

export default {
  argTypes: {
    color: {
      control: { type: 'text' },
      defaultValue: 'info',
    },
    disabled: {
      control: { type: 'boolean' },
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
  onClick: null,
  size: 'md',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Label',
  onClick: null,
  size: 'md',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Label',
  onClick: null,
  size: 'md',
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Label',
  onClick: null,
  size: 'md',
  variant: 'outline',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  avatar: {
    alt: "Avatar's tag",
    src: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  children: 'Label',
  onClick: null,
  size: 'md',
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: 'Label',
  onClick: () => {
    // eslint-disable-next-line no-alert
    alert(
      'By Providing a callback to `onClick` you can add click handler to a Tag.'
    );
  },
  size: 'md',
};
