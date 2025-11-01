import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';
import type { CardProps } from './Card.types';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'Skincare thoughts',
    description: 'Honestly, keep it simple, because less is more. My holy grails are sunscreen, moisturizer, BHA toner, and snail serum <3',
    backgroundColor: '#ffffff',
  },
};

export const CustomBackground: Story = {
  args: {
    title: 'Skincare thoughts',
    description: 'Honestly, keep it simple, because less is more. My holy grails are sunscreen, moisturizer, BHA toner, and snail serum <3',
    backgroundColor: 'lightpink',
  },
};
