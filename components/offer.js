import React from 'react'

import PropTypes from 'prop-types'

const Offer = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .offer-offer {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 350px;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .offer-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .offer-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .offer-details {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .offer-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .offer-text1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .offer-text2 {
            max-width: 400px;
            text-align: left;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .offer-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
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
