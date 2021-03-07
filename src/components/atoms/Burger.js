import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


const StyledBurger = styled.div`
  z-index: 9;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    
  }

  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px;
    transform-origin: 1px;
    transition: 0.2s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;


const StyledLinkList = styled.div`
z-index: 8;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 100vh;
  position: absolute;
  right: 0px;
  top: 0;
  padding-top: 8vh;
  background-color: white;
 

  @media screen and (max-width: 768px) {
    display: flex;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    transition: 0.3s ease-in;

  }
`;

const StyledNavElement = styled.div`
  color: black;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding-top: 20px;
  

  &.active {
    color: ${({ theme }) => theme.mediumRed};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

`;

const BlurPanel = styled.div`
/* display: ${({open}) => open ? 'block' : 'none'}; */
background-color: ${({open}) => open ? 'rgba(1, 1, 1, 0.4)' : 'rgba(0,0,0,0)'};
transition: 0.3s;
left: 0;
top: 0;
position: absolute;
height: 100vh;
width: 100%;

z-index: 7;


`;


const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </StyledBurger>
        <StyledLinkList open={open}>
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
        <BlurPanel open={open}/>
      </>
    );
};

export default Burger;