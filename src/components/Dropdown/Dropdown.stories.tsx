import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';
import type { DropdownProps } from './Dropdown.types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    selected: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    options: ['Switzerland', 'Germany', 'Italy'],
    selected: 'Switzerland',
    disabled: false,
    backgroundColor: 'white',
  },
};

export const Disabled: Story = {
  args: {
    options: ['Switzerland', 'Germany', 'Italy'],
    selected: 'Option 2',
    disabled: true,
    backgroundColor: 'white',
  },
};
