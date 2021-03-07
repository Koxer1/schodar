import React from 'react';
import Logo from '../../assets/logo_landscape.svg';
import styled from 'styled-components';


const StyledIMG = styled.img`
  width: 200px;
  margin: 10px;
  transition: 0.3s;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

const LogoComponent = () => (
    <StyledIMG alt='logo' src={Logo} />
);

export default LogoComponent;