import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../atoms/logo';

const Wrapper = styled.div`
width: 100%;
height: 100px;
background-color: transparent;
border: 2px solid black;
display: flex;
justify-content: space-between;
`;

const Bar = () => (
  <Wrapper>
    <LogoComponent />
    <h1>menu</h1>
  </Wrapper>
);

export default Bar;