import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ cards }) => (
  <div className='card-list'>
    {cards.map((card, idx) => (
      <Card key={card.id || idx} idx={idx} card={card} />
    ))}
  </div>
);

export default CardList;