import React from 'react';
import Card from './Card'

import './Cards.scss';

const Cards: React.FC = (props: any) => {
  return (
      <section>
        {
            props.cards.map((card: any) => <Card card={card} key={card}>card</Card>)
        }
      </section>
  )
}

export default Cards
