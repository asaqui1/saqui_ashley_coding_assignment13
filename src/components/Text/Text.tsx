import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.span<{ fontSize?: string; color?: string; disabled?: boolean }>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => (props.disabled ? 'grey' : props.color || 'black')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

export const Text: React.FC<TextProps> = ({ content, fontSize, color, disabled = false }) => {
  return <StyledText fontSize={fontSize} color={color} disabled={disabled}>{content}</StyledText>;
};