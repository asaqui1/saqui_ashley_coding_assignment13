import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  description: string;
  backgroundColor?: string;
};

const StyledCard = styled.div<{ backgroundColor?: string }>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor || '#f0f0f0'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundColor,
}) => (
  <StyledCard backgroundColor={backgroundColor}>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledCard>
);
