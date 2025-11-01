import React from 'react';
import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const StyledTd = styled.td`
  border: 1px solid black;
  padding: 8px;
`;

const TableCell: React.FC<TableCellProps> = ({ text }) => <StyledTd>{text}</StyledTd>;

export default TableCell;