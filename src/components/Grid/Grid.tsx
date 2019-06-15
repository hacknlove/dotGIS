import React from 'react';
import { connect } from 'react-redux'

import './Grid.scss';

import Card from '../Card/Card'

const GridPresentation: React.FC = (props: any) => {
  return (
      <section>
        {
            props.cards.map((card: any) => <Card card={card} key={card}>card</Card>)
        }
      </section>
  )
}

const GridContainer = connect(
  function mapStateToProps (state: any) {
    return {
      cards: Object.keys(state.cards)
    }
  }
)(GridPresentation)

export default GridContainer
