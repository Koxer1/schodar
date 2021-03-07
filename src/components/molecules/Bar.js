import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../atoms/logo';
import { NavLink } from "react-router-dom";
import Burger from '../atoms/Burger';



const Wrapper = styled.div`
  width: 100%;
  height: 8vh;
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
`;

const StyledLinkList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
   @media screen and (max-width: 768px) {
       display: none;
  } 
`;

const StyledNavElement = styled.div`
  color: black;
  margin-right: 20px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  

  &.active {
    color: ${({ theme }) => theme.mediumRed};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

`;



const Bar = () => (
  <Wrapper>
    <LogoComponent />
    <Burger />
    <StyledLinkList>
      <StyledNavElement as={NavLink} activeclass="active" to="/home">
        Home
      </StyledNavElement>
      <StyledNavElement as={NavLink} activeclass="active" to="/about">
        About
      </StyledNavElement>
      <StyledNavElement as={NavLink} activeclass="active" to="/projects">
        Projects
      </StyledNavElement>
      <StyledNavElement as={NavLink} activeclass="active" to="/contact">
        Contact
      </StyledNavElement>
    </StyledLinkList>
  </Wrapper>
);

export default Bar;