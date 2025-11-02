import React from 'react';
import TableCell from '../TableCell/TableCell';
import type { TableRowProps } from './TableRow.types';

const TableRow: React.FC<TableRowProps> = ({ cells }) => (
  <tr>
    {cells.map((cell, idx) => (
      <TableCell key={idx} {...cell} />
    ))}
  </tr>
);

export default TableRow;
