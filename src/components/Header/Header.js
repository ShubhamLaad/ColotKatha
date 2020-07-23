import React from 'react';
import './Header.scss'
import { Container } from '../Layout/Layout';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <header>
      <Container>
        <Link to="/about">About</Link>
      </Container>
    </header>
  );
}

export default Header;