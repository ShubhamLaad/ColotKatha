import React, { useState } from 'react';
import './Header.scss'
import { Container } from '../Layout/Layout';
import { NavLink, Link } from 'react-router-dom';

const LINKS = [
  { path: '/about', label: 'About Us' },
  { path: '/learning-videos', label: 'Learning Videos' },

]

export default function Header(props) {

  const [showNav, setshowNav] = useState(false)

  return (
    <header>
      <Container>
        <Link to="/" className="logo" title="color katha"><img className="img-responsive" src="/logo.png" alt="logo" /></Link >
        <button className="navbar-toggle collapsed" data-toggle="collapse" onClick={() => { setshowNav(!showNav) }}>
          <span className="sr-only hide">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <ul className={`nav-list ${showNav ? 'visible-xs' : 'hide-xs'} `}>
          {
            LINKS.map(link => <li key={link.label}><NavLink to={link.path} title={link.label} activeClassName="active">{link.label}</NavLink ></li>)
          }
        </ul>

      </Container>
    </header>
  );
}
