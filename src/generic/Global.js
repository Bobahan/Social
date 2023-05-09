import styled, { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 100%;
    margin: 0;
  }

  p {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`;

export default StyledGlobal;
