import React from 'react';
import styled, { css } from 'styled-components';

const CardRoot = styled.div`
  border-radius: 20px;
  padding: 10px 6px;
    
  background: white; 
`;

const elevationStyle = css`
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  background-color: #f7f2f7;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: #e9e3ed;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  }

  &:focus {
    background: #e2dce8;
  }

  &:active {
    background: #e2dce8;
  }

  &.Mui-disabled {
    background-color: rgba(247, 242, 247, 0.38);
    color: #e7e0eb;
    box-shadow: none;
  }
`;

const filledStyle = css`
  box-shadow: none;
  background-color: #e6e1e6;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: #dad4dd;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
                0px 1px 1px 0px rgba(0,0,0,0.14), 
                0px 1px 3px 0px rgba(0,0,0,0.12);
  }

  &:focus {
    background: #d4ced9;
    box-shadow: none;
  }

  &:active {
    background: #d4ced9;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
                0px 1px 1px 0px rgba(0,0,0,0.14), 
                0px 1px 3px 0px rgba(0,0,0,0.12);
  }

  &.Mui-disabled {
    background-color: rgba(230, 225, 230, 0.38);
    color: #e7e0eb;
    box-shadow: none;
  }
`;


const outlinedStyle = css`
  box-shadow: none;
  background-color: #fdf8fd;
  border: 1px solid #7a757f;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: #eee9f2;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
                0px 1px 1px 0px rgba(0,0,0,0.14), 
                0px 1px 3px 0px rgba(0,0,0,0.12);
  }

  &:focus {
    background: #e7e1ed;
    box-shadow: none;
  }

  &:active {
    background: #d4ced9;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 1px 5px 0px rgba(0,0,0,0.12);
  }

  &.Mui-disabled {
    border-color: rgba(230, 225, 230, 0.12);
    box-shadow: none;
  }
`;

const Card = styled(CardRoot)`
  ${props => props.variant === 'elevation' && elevationStyle}
  ${props => props.variant === 'filled' && filledStyle}
  ${props => props.variant === 'outlined' && outlinedStyle}
`;

const MaterialCard = ({ variant, children, ...props }) => {
  return <Card variant={variant} {...props}>{children}</Card>;
};

export default MaterialCard;
