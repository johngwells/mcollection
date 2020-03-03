import React from 'react';

import './card.styles.css';

const Card = (props) => (
  <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set1&size=150x150`} />
    <h1>{props.monster.name}</h1>
  </div>
);

export default Card;
