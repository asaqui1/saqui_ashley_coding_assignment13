import type { TableHeaderProps } from './TableHeader/TableHeader.types';
import type { TableRowProps } from './TableRow/TableRow.types';
import type { TableFooterProps } from './TableFooter/TableFooter.types';
import type { TableCellProps } from './TableCell/TableCell.types'; // added import

export interface TableProps {
  headers: TableHeaderProps[];
  rows: TableCellProps[][]; // each row is an array of TableCellProps
  footer?: TableFooterProps;
  borderColor?: string;
}
