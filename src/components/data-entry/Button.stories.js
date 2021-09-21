import Button from './Button';

export default {
  argTypes: {
    endIcon: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
  },
  component: Button,
  title: 'Design system/dataEntry/Button',
};

const Template = args => {
  return <Button {...args}>{args.label}</Button>;
};

export const Basic = Template.bind({});
Basic.args = {
  center: true,
  label: 'Basic Button',
};

export const Loading = Basic.bind({});
Loading.args = {
  loading: true,
};
