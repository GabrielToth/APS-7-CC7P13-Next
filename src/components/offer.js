import React from 'react'

import PropTypes from 'prop-types'

import './offer.css'

const Offer = (props) => {
  return (
    <div className="offer-offer">
      <img alt="image" src={props.Image} className="offer-image" />
      <div className="offer-content">
        <div className="offer-details">
          <span className="offer-text">{props.Nome}</span>
          <span className="offer-text1">{props.Criacoes}</span>
        </div>
        <span className="offer-text2">{props.Description}</span>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  Image: '/playground_assets/offers-11-300h.png',
  Criacoes: '3 Local guides',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Nome: 'Crete, Greece',
}

Offer.propTypes = {
  Image: PropTypes.string,
  Criacoes: PropTypes.string,
  Description: PropTypes.string,
  Nome: PropTypes.string,
}

export default Offer
