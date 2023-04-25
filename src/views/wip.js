import React from 'react'

import { Helmet } from 'react-helmet'

import './wip.css'

const WIP = (props) => {
  return (
    <div className="wip-container">
      <Helmet>
        <title>WIP - APS-7-UNIP</title>
        <meta name="description" content="APS-7-UNIP" />
        <meta property="og:title" content="WIP - APS-7-UNIP" />
        <meta property="og:description" content="APS-7-UNIP" />
      </Helmet>
      <h1 className="wip-text">WIP</h1>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1448932284983-0c7b152eba33?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHx3b3JrJTIwaW4lMjBwcm9ncmVzc3xlbnwwfHx8fDE2ODIxMDUxNTM&amp;ixlib=rb-4.0.3&amp;w=1500"
        className="wip-image"
      />
    </div>
  )
}

export default WIP
