import { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';
import type { TableProps } from './Table.types';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};
export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    headers: [
      { text: 'Best friend' },
      { text: 'Where we met' },
      { text: 'Friendship length' },
    ],
    rows: [
      [{ text: 'Elora' }, { text: 'High school' }, { text: '10 years' }],
      [{ text: 'Andrea' }, { text: 'Facebook' }, { text: '14-15 years' }],
    ],
    borderColor: 'black',
  },
};
