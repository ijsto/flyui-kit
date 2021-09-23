import React from 'react';

import FlyThemeProvider from '../FlyThemeProvider';
import Text from './Text';

export default {
  argTypes: {
    gradient: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    variant: {
      control: { type: 'select' },
      defaultValue: true,
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'eyebrow', 'caption'],
    },
  },
  component: Text,
  title: 'Data Entry/Text',
};

const Template = args => <Text {...args}>{args.children}</Text>;

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World!',
};

export const Themed = Template.bind({});
Themed.decorators = [
  story => (
    <FlyThemeProvider theme={{ fonts: { body: 'Times New Roman' } }}>
      {story()}
    </FlyThemeProvider>
  ),
];
Themed.args = {
  children: "I'm a Themed text!",
};
