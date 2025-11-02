import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => (props.disabled ? 'grey' : 'black')};
`;

const StyledInput = styled.input`
  cursor: inherit;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => (
  <StyledLabel disabled={disabled}>
    <StyledInput
      type="radio"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange && onChange(e.target.checked)}
    />
    {label}
  </StyledLabel>
);
