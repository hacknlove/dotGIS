import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Chart from '../Chart/Chart'

class CardPresentation extends Component<any> {
  render() {
    return (
        <div className="card">
          <div className="title">
            {this.props.name}
            <div onClick={this.props.close}>
              <FontAwesomeIcon icon={faTimes}/>
            </div>
          </div>
            <div className="body">
              <Chart data={this.props.data}/>
            </div>

        </div>
    )
  }
}

const CardContainer = connect(
  function mapStateToProps (state: any, ownProps: any) {
    return {
      ...state.cards[ownProps.card],
      id: ownProps.card
    }
  },
  function mapDispatchToProps(dispatch, ownProps: any) {
    return {
        close () {
            dispatch({
                type: 'CLOSE_CHART',
                card: ownProps.card
            })
        }
    }
  }
)(CardPresentation)

export default CardContainer
