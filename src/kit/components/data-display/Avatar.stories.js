import React from 'react';

import Text from './Text';
import Box from '../layout/Box';
import Stack from '@/components/layout/Stack';

import Avatar from './Avatar';

export default {
  argTypes: {
    outline: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    outlineColor: {
      control: { type: 'color' },
    },
    outlineWidth: {
      control: { type: 'text' },
      defaultValue: '2px',
    },
    radius: {
      control: { type: 'text' },
      defaultValue: '50%',
    },
    shape: {
      control: { type: 'inline-radio' },
      defaultValue: 'round',
      options: ['square', 'squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'select' },
      defaultValue: 'xl',
      options: ['ty', 'sm', 'md', 'lg', 'xl', '100%'],
    },
    spacing: {
      control: { type: 'text' },
      defaultValue: '-8px',
    },
    src: {
      defaultValue:
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80',
    },
  },
  component: Avatar,
  title: 'Data Display/Avatar',
};

const Template = args => <Avatar {...args}>{args.children}</Avatar>;

export const Default = Template.bind({});
Default.args = {
  // src: 'https://source.unsplash.com/92x92/?portrait',
};

export const Initials = Template.bind({});
Initials.args = {
  children: <Text>AS</Text>,
};

export const AvatarGroup = Template.bind({});
AvatarGroup.decorators = [
  story => {
    const { props } = story();
    const { spacing } = props;

    return (
      <Stack direction="row" space={0}>
        <Box>{story()}</Box>
        <Box ml={spacing}>{story()}</Box>
        <Box ml={spacing}>{story()}</Box>
      </Stack>
    );
  },
];
AvatarGroup.args = {
  src: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1326&q=80',
};

// @TODO: Move out to its own component AvatarGroup />
export const AvatarGroupExtra = Template.bind({});
AvatarGroupExtra.decorators = [
  story => {
    const { props } = story();
    return (
      <Stack direction="row" space={0}>
        <Box>{story()}</Box>
        <Box ml={-2}>{story()}</Box>
        <Box ml={-2}>{story()}</Box>
        <Box ml={-2}>
          <Avatar {...props} src={null}>
            +2
          </Avatar>
        </Box>
      </Stack>
    );
  },
];
AvatarGroupExtra.args = {
  // src: 'https://source.unsplash.com/92x92/?portrait',
};
