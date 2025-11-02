import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<{
  color?: string;
  fontSize?: string;
  disabled?: boolean;
}>`
  color: ${(props) => (props.disabled ? 'grey' : props.color || 'black')};
  font-size: ${(props) => props.fontSize || '16px'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

export const Label: React.FC<LabelProps> = ({
  text,
  color,
  fontSize,
  disabled = false,
}) => (
  <StyledLabel color={color} fontSize={fontSize} disabled={disabled}>
    {text}
  </StyledLabel>
);
