import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import js from './js.png'

export const Navigation = (props) => {

    return (
      <div >
        <ul >
          <NavbarBrand href="/"> <img src={js} alt="logo" width="40" height="40"/> </NavbarBrand>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">About</a></li>
          <a href="/cv.pdf" target="_blank" class="header__cv">Download Cv</a>
        </ul>
      </div>
    )
  }

export default Navigation;
