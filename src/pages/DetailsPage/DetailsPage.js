import React from 'react';
import { Container } from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import STORIES from '../../json/STORIES.json'

export default function DetailsPage() {
  const { index } = useParams();
  const storyDetails = STORIES[index]

  return (
    <main>
      <Container>
        <img width="100%" src={storyDetails.imgUrl} alt={storyDetails.heading} />
      </Container>
    </main>
  );
}
