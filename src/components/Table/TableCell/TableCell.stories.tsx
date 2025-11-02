import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableCell from './TableCell';
import type { TableCellProps } from './TableCell.types';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
};
export default meta;

type Story = StoryObj<TableCellProps>;

export const Default: Story = {
  args: {
    text: 'Cell Text',
  },
};
