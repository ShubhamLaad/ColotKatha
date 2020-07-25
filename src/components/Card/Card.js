import React from 'react';
import './Card.scss'

const Card = ({ imgUrl, heading, description }) => {
  return (
    <div className="card">
      <div className="img-bg shadow" style={{ backgroundImage: `url(${imgUrl})` }}></div>
      <h3 className="heading">{heading}</h3>
      <p className="description">{description}</p>
    </div >
  );
};

export default Card;