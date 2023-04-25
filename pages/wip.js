import React from 'react'
import Head from 'next/head'

const WIP = (props) => {
  return (
    <>
      <div className="wip-container">
        <Head>
          <title>WIP - APS-7-UNIP</title>
          <meta name="description" content="APS-7-UNIP" />
          <meta property="og:title" content="WIP - APS-7-UNIP" />
          <meta property="og:description" content="APS-7-UNIP" />
        </Head>
        <h1 className="wip-text">WIP</h1>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1448932284983-0c7b152eba33?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHx3b3JrJTIwaW4lMjBwcm9ncmVzc3xlbnwwfHx8fDE2ODIxMDUxNTM&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="wip-image"
        />
      </div>
      <style jsx>
        {`
          .wip-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wip-text {
            color: rgb(255, 255, 255);
            padding: var(--dl-space-space-unit);
            z-index: 2;
            font-size: 200px;
            box-shadow: -5px 5px 10px 0px rgba(26, 26, 26, 0.7);
            border-radius: 50px;
          }
          .wip-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default WIP
