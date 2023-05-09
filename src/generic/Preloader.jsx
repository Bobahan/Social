import React from 'react';
import styled from 'styled-components';
import preloaderIMG from '../assets/preloader.gif';

const StyledPreloader = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  height: 200px;
`;

export const Preloader = () => {
  return <StyledPreloader src={preloaderIMG} />;
};
