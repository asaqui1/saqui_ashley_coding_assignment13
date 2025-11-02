import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';
import type { TextProps } from './Text.types';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    content: 'Sample Text',
    fontSize: '16px',
    color: 'black',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled Text',
    fontSize: '16px',
    color: 'black',
    disabled: true,
  },
};
