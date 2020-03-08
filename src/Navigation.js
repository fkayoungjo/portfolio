import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import js from './js.png'

export const Navigation = (props) => {

    return (
      <div >
        <ul >
        <Navbar>
          <NavbarBrand href="/"> <img src={js} alt="logo" width="40" height="40"/> </NavbarBrand>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/portfilio/">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog/">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact/">Contact</NavLink>
          </NavItem>
          <a href="/cv.pdf" target="_blank" class="header__cv">Download CV</a>
          </Navbar>
        </ul>
      </div>
    )
  }

export default Navigation;
