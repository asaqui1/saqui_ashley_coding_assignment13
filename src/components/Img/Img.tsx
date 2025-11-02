import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ borderRadius?: string; disabled?: boolean }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  disabled = false,
}) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    borderRadius={borderRadius}
    disabled={disabled}
  />
);
