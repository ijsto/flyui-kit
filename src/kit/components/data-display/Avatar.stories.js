import React from 'react';

import Box from '../layout/Box';
import Stack from '../layout/Stack';

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
      control: { type: 'radio' },
      defaultValue: 'rounded',
      options: ['square', 'squared', 'regular', 'rounded', 'round'],
    },
    size: {
      control: { type: 'select' },
      defaultValue: 'xl',
      options: ['ty', 'sm', 'md', 'lg', 'xl'],
    },
    spacing: {
      control: { type: 'text' },
      defaultValue: '-8px',
    },
    src: 'https://source.unsplash.com/92x92/?portrait',
  },
  component: Avatar,
  title: 'Data Entry/Avatar',
};

const Template = args => <Avatar {...args}>{args.label}</Avatar>;

export const Default = Template.bind({});
Default.args = {
  src: 'https://source.unsplash.com/92x92/?portrait',
};

export const Initials = Template.bind({});
Initials.args = {
  initials: 'Agi Smith',
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
  src: 'https://source.unsplash.com/92x92/?portrait',
};

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
  src: 'https://source.unsplash.com/92x92/?portrait',
};
