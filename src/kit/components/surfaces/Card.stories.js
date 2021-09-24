import React from 'react';

import Card from './Card';

export default {
  argTypes: {},
  component: Card,
  title: 'Data Display/Card',
};

const Template = args => <Card {...args}>{args.children}</Card>;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  p: 3,
};
