import React from 'react';

import Modal from './Modal';
import Text from '../data-display/Text';
import Box from '../layout/Box';

export default {
  argTypes: {
    borderRadius: {
      control: { type: 'text' },
    },
    isOpen: {
      control: { type: 'boolean' },
      description:
        'You can explicitly provide `isOpen` value to control the Modal from outside. By default it will use internal `useState` to control visibility.',
    },
  },
  component: Modal,
  title: 'Feedback/Modal',
};

const Template = args => (
  <Modal isOpen {...args}>
    {args.children}
  </Modal>
);

export const Default = Template.bind({});
Default.decorators = [
  story => (
    <Box alignItems="center" display="flex" justifyContent="center" p={3}>
      {story()}
    </Box>
  ),
];
Default.args = {
  children: (
    <Box p={3}>
      <Text>
        This is a <code>{`<Text />`}</code> component inside the Modal.
      </Text>
    </Box>
  ),
  label: 'Modal Label',
  onClose: null,
  size: 'md',
};
