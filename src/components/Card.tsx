import React, { Component } from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Chart from './Chart'

class Card extends Component<any> {
  render() {
    return (
        <div className="cardContainer">
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
        </div>
    )
  }
}


export default Card
