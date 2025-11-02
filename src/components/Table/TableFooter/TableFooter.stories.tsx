import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';
import type { TableFooterProps } from './TableFooter.types';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
};
export default meta;

type Story = StoryObj<{ footer: TableFooterProps }>;

export const Default: Story = {
  args: {
    footer: { text: 'Total: 2 Rows' },
  },
};
