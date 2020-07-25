import React from 'react';
import './HomePage.scss'
import Card from '../../components/Card/Card';
import STORIES from '../../json/STORIES.json'
import BannerCarousel from '../../components/BannerCarousel/BannerCarsousel';
import { Container } from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <main>
        <section className="banner-section">
          <Container>
            <div className="banner-wrap">
              <BannerCarousel />
              <h1>Making the art of photography, simple and very much possible</h1>
            </div>
          </Container>
        </section>
        <section className="img-section">
          <Container>
            <ul className="row card-list">
              {STORIES.map((story, index) =>
                <li className="col-md-4 col-sm-6" key={index}>
                  <Link to={`/${index}`} title={story.heading}>
                    <Card {...story} />
                  </Link>
                </li>
              )}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
