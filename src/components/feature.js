import React from 'react'

import PropTypes from 'prop-types'

import './feature.css'

const Feature = (props) => {
  return (
    <div className="feature-feature">
      <div className="feature-heading">
        <img alt="image" src={props.Icon} className="feature-icon" />
        <h3 className="feature-header">{props.Header}</h3>
      </div>
      <p className="feature-description">{props.Description}</p>
    </div>
  )
}

Feature.defaultProps = {
  Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Icon: '/playground_assets/thumbs-up.svg',
  Header: 'Hand Picked Guides',
}

Feature.propTypes = {
  Description: PropTypes.string,
  Icon: PropTypes.string,
  Header: PropTypes.string,
}

export default Feature
