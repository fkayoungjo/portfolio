import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export const Navigation = (props) => {

    return (
      <div >
        <ul >
          <li style={{float: `left`}} ><a href="/">Jordan Simon</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </div>
    )
  }

export default Navigation;
