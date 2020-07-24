import React from 'react';
import './Header.scss'
import { Container } from '../Layout/Layout';
import { NavLink, Link } from 'react-router-dom';

const LINKS = [
  { path: '/about', label: 'About Us' },
]

export default function Header(props) {

  return (
    <header>
      <Container>
        <Link to="/" className="logo" title="color katha"><img className="img-responsive" src="/logo.png" alt="logo" /></Link >
        <ul className="d-flex nav-list">
          {
            LINKS.map(link => <li key={link.label}><NavLink to={link.path} title={link.label} activeClassName="active">{link.label}</NavLink ></li>)
          }
        </ul>

      </Container>
    </header>
  );
}
