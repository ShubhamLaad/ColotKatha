import React from 'react';
import './Card.scss'

const Card = ({ imgUrl, heading }) => {
  return (
    <div className="card">
      <div className="img-bg shadow" style={{ backgroundImage: `url(${imgUrl})` }}></div>
      <h3 className="heading">{heading}</h3>
    </div >
  );
};

export default Card;