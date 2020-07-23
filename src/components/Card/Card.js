import React from 'react';
import './Card.scss'

const Card = ({ imgUrl, heading, description }) => {
  return (
    <div className="card">
      <div className="img-bg" style={{ backgroundImage: `url(${imgUrl})` }}></div>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div >
  );
};

export default Card;