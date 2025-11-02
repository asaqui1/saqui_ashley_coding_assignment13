import React from 'react';
import styled from 'styled-components';
import type { TableFooterProps } from './TableFooter.types';

const StyledTd = styled.td`
  border: 1px solid black;
  padding: 8px;
  font-weight: bold;
`;

interface Props {
  footer: TableFooterProps;
}

const TableFooter: React.FC<Props> = ({ footer }) => (
  <tr>
    <StyledTd colSpan={3}>{footer.text}</StyledTd>
  </tr>
);

export default TableFooter;
