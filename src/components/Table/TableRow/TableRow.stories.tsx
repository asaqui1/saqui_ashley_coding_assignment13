import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableRow from './TableRow';
import type { TableRowProps } from './TableRow.types';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
};
export default meta;

type Story = StoryObj<TableRowProps>;

export const Default: Story = {
  args: {
    cells: [{ text: 'Iced' }, { text: 'Caramel' }, { text: 'Macchiato' }],
  },
};
