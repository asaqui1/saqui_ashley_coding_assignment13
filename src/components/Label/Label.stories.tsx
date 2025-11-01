import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';
import type { LabelProps } from './Label.types';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    text: 'Sample Label',
    color: 'black',
    fontSize: '16px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    color: 'black',
    fontSize: '16px',
    disabled: true,
  },
};