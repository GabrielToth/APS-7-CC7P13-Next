import React from 'react'

import PropTypes from 'prop-types'

import './article.css'

const Article = (props) => {
  return (
    <div className={`article-article ${props.rootClassName} `}>
      <img alt="image" src={props.Image} className="article-image" />
      <div className="article-content">
        <div className="article-heading">
          <h2 className="article-header">{props.Header}</h2>
          <p className="article-description">{props.Description}</p>
        </div>
        <button className="button-arrow button">
          <span className="article-text">Read more</span>
          <span className="article-text1">&gt;</span>
        </button>
      </div>
    </div>
  )
}

Article.defaultProps = {
  rootClassName: '',
  Image: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Header: 'Understand your customers',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  Image: PropTypes.string,
  Header: PropTypes.string,
  Description: PropTypes.string,
}

export default Article
