import React from 'react';

import CardToolbar from './CardToolbar';

export default {
  argTypes: {
    icon: {
      control: { type: 'text' },
    },
    titleVariant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'caption', 'eyebrow'],
    },
  },
  component: CardToolbar,
  title: 'Surfaces/Card Toolbar',
};

const Template = args => <CardToolbar {...args}>{args.children}</CardToolbar>;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Card toolbar',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'calendar-days',
  title: 'Hey toolbar icon',
};
