import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../atoms/logo';
import { NavLink } from "react-router-dom";



const Wrapper = styled.div`
width: 100%;
height: 100px;
background-color: transparent;
border: 2px solid black;
display: flex;
justify-content: space-around;
align-items: center;
padding: 0 20px;
`;

const StyledLinkList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavElement = styled.div`
  color: black;
  margin-right: 20px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  
  &.active {
   color: red;
  }
`;


const Bar = () => (
  <Wrapper>
    <LogoComponent />
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