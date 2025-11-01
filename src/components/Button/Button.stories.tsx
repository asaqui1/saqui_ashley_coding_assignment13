// imports
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';
import type { ButtonProps } from './Button.types';

// story metadata
const elem: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default elem;

// story type
type Story = StoryObj<ButtonProps>;

// default button story
export const Default: Story = {
  args: {
    text: 'Click this button for some fun stuff!',
    disabled: false,
    backgroundColor: 'pink',
  },
};

//disabled button story
export const Disabled: Story = {
  args: {
    text: 'Unable to click',
    disabled: true,
    backgroundColor: 'pink',
  },
};