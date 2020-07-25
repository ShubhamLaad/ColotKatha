import React from 'react';
import './Footer.scss'
import { Container } from '../Layout/Layout';
import { Facebook, Insta, Youtube, Gmail, Linkedin } from '../Icons/Icons';

const SOCIAL_ICONS = [
  { icon: <Insta />, title: 'Insta', href: 'https://www.instagram.com/color_katha' },
  { icon: <Facebook />, title: 'Facebook', href: 'https://www.facebook.com/Colorkatha' },
  { icon: <Youtube />, title: 'Youtube', href: 'https://www.youtube.com/user/ujjvallaad' },
  { icon: <Gmail />, title: 'Gmail', href: 'mailto:ujjvallaad@gmail.com' },
  { icon: <Linkedin />, title: 'Linkedin', href: 'https://www.linkedin.com/in/ujjwal-laad-3a3225111' },
]

export default function Footer(props) {
  return (
    <footer>
      <Container className="d-flex">
        <p>© 2020 ColorKatha</p>
        <ul className="d-flex">
          {SOCIAL_ICONS.map(social => <li key={social.title}>
            <a target="_blank" rel="noopener noreferrer" title={social.title} href={social.href}>{social.icon}</a>
          </li>)}
        </ul>
      </Container>
    </footer>
  );
}
