import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardToolbar from './CardToolbar';

export default {
  argTypes: {
    borderRadius: {
      control: { type: 'text' },
      defaultValue: '16px',
    },
  },
  component: Card,
  title: 'Surfaces/Card',
};

const Template = args => <Card {...args}>{args.children}</Card>;

export const Basic = Template.bind({});
Basic.args = {
  children:
    'You can simply import card and start painting within. This is the most basic approach and in many cases will work just fine.',
  p: 3,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  border: 1,
  children:
    'To add a border to your card simply add `border={1}` (an Integer) or `border="1px"` (a CSS value).',
  p: 3,
};

export const WithLeftBorder = Template.bind({});
WithLeftBorder.args = {
  borderLeft: 1,
  children:
    'To control the location of border add `border_LOCATION_={1}`, for example, `borderLeft={1}`.',
  p: 3,
};

export const WithBody = Template.bind({});
WithBody.args = {
  children: (
    <CardBody title="Card Title" p={2}>
      By separating the body from the Card itself we can better control the
      layout. For example, internal body padding, overflow and other styling
      properties.
    </CardBody>
  ),
};

export const WithToolbar = Template.bind({});
WithToolbar.args = {
  children: (
    <>
      <CardToolbar title="Card Title" p={2} />
      <CardBody title="Card Title" p={2}>
        Card with a toolbar. Call this the Window Card, if you will.
      </CardBody>
    </>
  ),
};

export const WithToolbarIcon = Template.bind({});
WithToolbarIcon.args = {
  children: (
    <>
      <CardToolbar borderBottom={1} icon="preview" title="Card Title" p={2} />
      <CardBody title="Card Title" p={2}>
        Add a toolbar icon to provide additional visual feedback to the card.
      </CardBody>
    </>
  ),
};
