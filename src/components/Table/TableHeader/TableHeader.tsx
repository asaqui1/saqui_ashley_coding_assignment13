import React from 'react';
import styled from 'styled-components';
import type { TableHeaderProps } from './TableHeader.types';

const StyledTh = styled.th`
  border: 1px solid black;
  padding: 8px;
`;

interface Props {
  headers: TableHeaderProps[];
}

const TableHeader: React.FC<Props> = ({ headers }) => (
  <tr>
    {headers.map((header, idx) => (
      <StyledTh key={idx}>{header.text}</StyledTh>
    ))}
  </tr>
);

export default TableHeader;
