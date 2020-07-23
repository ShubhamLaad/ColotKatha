import React from 'react';
import './HomePage.scss'
import Card from '../../components/Card/Card';
import STORIES from '../../json/STORIES.json'
import BannerCarousel from '../../components/BannerCarousel/BannerCarsousel';
import { Container } from '../../components/Layout/Layout';

export default function HomePage() {
  return (
    <>
      <main>
        <section className="banner-section">
          <Container>
            <BannerCarousel />

          </Container>
        </section>
        <section className="img-section">
          <Container>
            <ul className="row card-list">
              {STORIES.map((story, key) =>
                <li className="col-md-4" key={key}>
                  <Card {...story} />
                </li>
              )}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
