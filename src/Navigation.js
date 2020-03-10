import React from 'react';
import { Navbar, NavbarBrand,  NavItem, NavLink } from 'reactstrap';
import js from './js.png'

export const Navigation = (props) => {

    return (
      <div >
        <ul className="navnav">
        <Navbar >
          <NavbarBrand href="/"> <img src={js} alt="logo" width="40" height="40"/> </NavbarBrand>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#portfolio">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <a href="https://docs.google.com/document/d/1aK18his6MyW7xjeHaBCtYTfq-r3Jn7DidUFmWWv7IXE/edit?usp=sharing" target="_blank" class="header__cv">Download CV</a>
          </Navbar>
        </ul>
      </div>
    )
  }

export default Navigation;
