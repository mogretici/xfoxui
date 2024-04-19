import React from 'react';
import styled from 'styled-components';

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    color?: string;
    fontSize?: string;
    hoverColor?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    variant?: 'dashed' | 'link';
    width?: string;
    height?: string;
  },
) => {
  const StyledButton = styled.button`
    width: ${props.width || '200px'};
    height: ${props.height || '50px'};
    color: ${props.color || '#efb560'};
    font-size: ${props.fontSize || '13px'};
    background: ${props.backgroundColor || 'transparent'};
    border: 2px
      ${props.variant === 'dashed'
        ? 'dashed'
        : props.variant === 'link'
          ? 'none'
          : 'solid'}
      ${props.hoverBackgroundColor || '#efb560'};
    cursor: ${props.variant === 'link' ? 'pointer' : 'default'};
    text-decoration: ${props.variant === 'link' ? 'underline' : 'none'};
    transition: 1s ease-in-out;
    &:hover {
      background: ${props.hoverBackgroundColor || '#efb560'};
      color: ${props.hoverColor || '#fff'};
    }
  `;
  return (
    <div>
      <StyledButton {...props}>{props.text}</StyledButton>
    </div>
  );
};
