import React, { useState } from 'react';
import './Header.scss'
import { Container } from '../Layout/Layout';
import { NavLink, Link } from 'react-router-dom';

const LINKS = [
  { path: '/about', label: 'About Us' },
  { path: '/blogs', label: 'Blogs' },

]

export default function Header(props) {

  const [showNav, setshowNav] = useState(false)

  return (
    <header>
      <Container>
        <div className="mobile-wrap">
          <Link to="/" className="logo" title="color katha"><img className="img-responsive" src="/logo.png" alt="logo" /></Link >
          <button className="visible-xs navbar-toggle collapsed" data-toggle="collapse" onClick={() => { setshowNav(!showNav) }}>
            <span className="sr-only d-none">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <ul className={`nav-list ${showNav ? 'show-animation' : ''} `}>
          {
            LINKS.map(link => <li key={link.label}><NavLink to={link.path} title={link.label} activeClassName="active">{link.label}</NavLink ></li>)
          }
        </ul>

      </Container>
    </header>
  );
}
