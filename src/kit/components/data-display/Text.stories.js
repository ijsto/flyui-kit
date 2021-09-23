import React from 'react';

import FlyThemeProvider from '../FlyThemeProvider';
import Box from '../layout/Box';
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

export const Themed = args => (
  <FlyThemeProvider theme={args.theme}>
    <>{args.children}</>
  </FlyThemeProvider>
);
Themed.argTypes = {
  gradient: { control: { disable: true } },
  theme: {
    control: { type: 'object' },
    defaultValue: { fonts: { body: 'Times New Roman' } },
  },
  variant: { control: { disable: true } },
};

Themed.args = {
  children: (
    <>
      <Text>In your app you can use</Text>

      <Text gradient>
        <code>{`<FlyThemeProvider theme={yourThemeObject} />`}</code>
      </Text>

      <Text>to override any of the default values.</Text>

      <Text pt={3}>
        Try replacing "Times New Roman" with "Arial", "Monaco" or any other
        system font in the{' '}
        <Text inline gradient>
          <code>{`theme {}`}</code>
        </Text>
      </Text>

      <Text gradient pt={2}>
        PS. All text inside a<code>{`<Text />`}</code> tag can be gradient 😏
      </Text>

      <Text>
        Except emojis 😅 Those will turn into a shape filled with the gradient
        colour.
      </Text>
    </>
  ),
};

export const Inline = Template.bind({});
Inline.argTypes = {
  children: { control: { disable: true } },
  gradient: { control: { disable: true } },
  inline: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  variant: { control: { disable: true } },
};

Inline.decorators = [
  story => {
    const { props } = story();
    return (
      <div>
        <Box mb={3}>
          Milord, behold -
          <Text {...props} gradient border={1} mx={props.inline && 1}>
            {story()}
          </Text>
          - toggle <code>inline</code> to see a grand difference.
        </Box>
      </div>
    );
  },
];
Inline.args = {
  children: <> this gradient text is indeed a {`<Text />`} </>,
};
