import React from 'react';

import './styles.css';

const Card = ({ className, title, total }) => {
  return (
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      <span>{total}</span>
    </div>
  );
};

export default Card;
