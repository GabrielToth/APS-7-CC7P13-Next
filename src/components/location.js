import React from 'react'

import PropTypes from 'prop-types'

import './location.css'

const Location = (props) => {
  return (
    <div className="location-item">
      <img alt="image" src={props.Background} className="location-background" />
      <div className="location-content">
        <span className="location-location">{props.Location}</span>
      </div>
    </div>
  )
}

Location.defaultProps = {
  Background: '/playground_assets/destination-1-400h.png',
  Location: 'Tokyo, Japan',
}

Location.propTypes = {
  Background: PropTypes.string,
  Location: PropTypes.string,
}

export default Location
