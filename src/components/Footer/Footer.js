import React from 'react';
import './Footer.scss'
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <footer>
      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </footer>
  );
}

export default Example;