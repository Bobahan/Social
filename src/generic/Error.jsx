import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  color: red;

  p {
    font-weight: 700;
    font-size: 1em;
  }
`;

const Error = ({ children }) => {
  return (
    <StyledError>
      <p>{children}</p>
    </StyledError>
  );
};

export default Error;
