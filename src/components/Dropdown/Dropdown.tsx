import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.disabled ? 'grey' : props.backgroundColor || 'white'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  disabled = false,
  backgroundColor,
  onChange,
}) => {
  return (
    <StyledSelect
      value={selected}
      disabled={disabled}
      backgroundColor={backgroundColor}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};
