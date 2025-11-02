import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableHeader from './TableHeader';
import type { TableHeaderProps } from './TableHeader.types';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
};
export default meta;

type Story = StoryObj<{ headers: TableHeaderProps[] }>;

export const Default: Story = {
  args: {
    headers: [{ text: 'Name' }, { text: 'Age' }],
  },
};
