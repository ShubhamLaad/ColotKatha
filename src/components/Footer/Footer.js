import React from 'react';
import './Footer.scss'
import { Container } from '../Layout/Layout';
import { Facebook, Insta, Youtube, Gmail, Linkedin } from '../Icons/Icons';

const SOCIAL_ICONS = [
  { icon: <Insta />, name: 'Insta', href: '' },
  { icon: <Facebook />, name: 'Facebook', href: '' },
  { icon: <Youtube />, name: 'Youtube', href: '' },
  { icon: <Gmail />, name: 'Gmail', href: '' },
  { icon: <Linkedin />, name: 'Linkedin', href: '' },
]

export default function Footer(props) {
  return (
    <footer>
      <Container>
        <ul className="d-flex">
          {SOCIAL_ICONS.map(social => <li key={social.name}>
            <a target="_blank" rel="noopener noreferrer" title={social.name} href={social.href}>{social.icon}</a>
          </li>)}
        </ul>
      </Container>
    </footer>
  );
}
