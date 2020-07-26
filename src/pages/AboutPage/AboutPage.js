import React from 'react';
import { Container } from '../../components/Layout/Layout';
import './AboutPage.scss'

export default function AboutPage() {
  return (
    <main className="AboutPage">
      <Container>
        <h1>About Us</h1>
        <div className="clearfix">
          <div className="float-right ujjwal-image shadow">
            <img src="/images/ujjwal.jpg" alt="Ujjwal" className="img-responsive" />
          </div>
          <ul>

            <li> Hey!</li>
            <li>We all have had time to ourselves, and each of us has spent it in our own ways trying to keep our minds working and selves busy. If you look at my Instagram profile, I'm sure somewhere it will say that I have a passion for photography since a very young age, a craft which I spent time improving upon by reading books and reseaching more about photography, editing and perspective designing.

            </li>
            <li>
              I have been able to learn a lot over the past couple of months, and would love to share those learning with all of you!
          </li>
            <li>
              Making the art of photography, simple and very much possible.
          </li>
            <li>
              My goal is to form a community of photographers and artists who want to learn and improve upon their craft and help them find that something which would make you see the extraordinary within the ordinary.
          </li>
            <li>The ability to truly capture monotony.</li>
          </ul>


        </div>
      </Container>
    </main>
  );
}
