import React from 'react';
import styled from 'styled-components';
import { HeroImgProps } from './HeroImg.types';

const StyledImg = styled.img<{ borderRadius?: string; disabled?: boolean }>`
  width: 100%;
  height: auto;
  max-width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.height || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;

export const HeroImg: React.FC<HeroImgProps> = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  disabled = false,
}) => <StyledImg src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} disabled={disabled} />;