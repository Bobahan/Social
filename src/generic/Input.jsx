import React from 'react';
import styled, { css } from 'styled-components';
import { chechInputError } from '../helper';

const StyedInput = styled.input`
  padding: 5px;

  ${({ error }) =>
    error === true &&
    css`
      border: 2px solid red;
    `}
`;

const Input = ({ name, placeholder, register, required, error, type, validationSchema }) => {
  return (
    <StyedInput
      name={name}
      type={type}
      error={chechInputError(error)}
      placeholder={placeholder}
      {...register(name, validationSchema)}
    />
  );
};

export default Input;
