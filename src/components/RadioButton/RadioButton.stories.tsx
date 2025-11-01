import { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';
import type { RadioButtonProps } from './RadioButton.types';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  args: {
    label: 'Spring',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Summer',
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Autumn',
    checked: false,
    disabled: true,
  },
};