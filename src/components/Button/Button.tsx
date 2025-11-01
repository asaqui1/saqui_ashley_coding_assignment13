// Testing pre-commit hooks for Coding Assignment 13

// imports
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

// styled button
interface StyledButtonProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  background-color: ${(props: StyledButtonProps) =>
    props.disabled ? 'grey' : props.backgroundColor || 'pink'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props: StyledButtonProps) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: 0.3s;

  &:hover {
    background-color: ${(props: StyledButtonProps) =>
      props.disabled ? 'grey' : props.backgroundColor || '#fface3ff'};
  }
`;

// button component
export const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  backgroundColor = 'blue',
  onClick,
}: ButtonProps) => {

 // render styled button
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
};