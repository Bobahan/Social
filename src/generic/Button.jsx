import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-size: 1em;
  font-weigth: 400;
  line-height: 1.5;
  border-radius: 0.25em;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.bg || '#0d6efd'};
      border-color: ${(props) => (props.bg ? 'green' : 'black')};
      &:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: transparent;
      border: 1px solid transparent;
      color: #0d6efd;
      border-color: #0d6efd;
      &:hover {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
      }
    `}
`;

export default StyledButton;
