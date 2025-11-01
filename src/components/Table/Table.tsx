import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';
import TableFooter from './TableFooter/TableFooter';

const StyledTable = styled.table<{ borderColor?: string }>`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${(props) => props.borderColor || 'black'};
`;

export const Table: React.FC<TableProps> = ({ headers, rows, footer, borderColor }) => (
  <StyledTable borderColor={borderColor}>
    <thead>
      <TableHeader headers={headers} />
    </thead>
    <tbody>
      {rows.map((row, idx) => (
        <TableRow key={idx} cells={row} />
      ))}
    </tbody>
    {footer && (
      <tfoot>
        <TableFooter footer={footer} />
      </tfoot>
    )}
  </StyledTable>
);

export default Table;
