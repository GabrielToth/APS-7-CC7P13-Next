import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Parallel Late Goshawk</title>
        <meta property="og:title" content="Parallel Late Goshawk" />
      </Helmet>
    </div>
  )
}

export default Home
