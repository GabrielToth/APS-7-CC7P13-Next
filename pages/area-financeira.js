import React from 'react'
import Head from 'next/head'

import NavFinanceiro from '../components/nav-financeiro'

const AreaFinanceira = (props) => {
  return (
    <>
      <div className="area-financeira-container">
        <Head>
          <title>AreaFinanceira - APS-7-UNIP</title>
          <meta name="description" content="APS-7-UNIP" />
          <meta property="og:title" content="AreaFinanceira - APS-7-UNIP" />
          <meta property="og:description" content="APS-7-UNIP" />
        </Head>
        <div className="area-financeira-container1">
          <nav className="area-financeira-sidebar">
            <div className="area-financeira-nav-itens">
              <div className="area-financeira-nav-item">
                <img
                  alt="logo"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="area-financeira-image"
                />
                <span className="area-financeira-text">DASHBOARDS</span>
                <div className="area-financeira-options">
                  <span className="area-financeira-text01">
                    <span>Analytics</span>
                    <br></br>
                  </span>
                  <span className="area-financeira-text04">
                    <span>Criações</span>
                    <br></br>
                  </span>
                  <span className="area-financeira-text07">
                    <span>Parceiros</span>
                    <br></br>
                  </span>
                  <span className="area-financeira-text10">Despesas</span>
                  <span className="area-financeira-text11">Colaboradores</span>
                </div>
              </div>
            </div>
            <div className="area-financeira-profile">
              <div className="area-financeira-container2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1570825423916-690c2a5e98e2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwZmFjZXxlbnwwfHx8fDE2ODI3ODM1NTk&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="area-financeira-image1"
                />
                <div className="area-financeira-container3">
                  <span className="area-financeira-text12">
                    Joseph Jack James
                  </span>
                  <span className="area-financeira-text13">
                    Analista Financeiro
                  </span>
                </div>
              </div>
              <h1 className="area-financeira-text14">...</h1>
            </div>
          </nav>
          <NavFinanceiro rootClassName="nav-financeiro-root-class-name"></NavFinanceiro>
        </div>
      </div>
      <style jsx>
        {`
          .area-financeira-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .area-financeira-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #f5f5f5;
          }
          .area-financeira-sidebar {
            flex: 300px;
            width: 25%;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .area-financeira-nav-itens {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .area-financeira-nav-item {
            display: flex;
            flex-direction: column;
          }
          .area-financeira-image {
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
            object-position: left;
          }
          .area-financeira-text {
            font-family: Noto Sans;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .area-financeira-options {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .area-financeira-text01 {
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 400;
          }
          .area-financeira-text04 {
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 400;
          }
          .area-financeira-text07 {
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 400;
          }
          .area-financeira-text10 {
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 400;
          }
          .area-financeira-text11 {
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 400;
          }
          .area-financeira-profile {
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .area-financeira-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .area-financeira-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .area-financeira-container3 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .area-financeira-text12 {
            font-size: 1.15rem;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          .area-financeira-text13 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
          }
          .area-financeira-text14 {
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            letter-spacing: 2px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 991px) {
            .area-financeira-container1 {
              justify-content: flex-start;
            }
            .area-financeira-profile {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .area-financeira-image1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AreaFinanceira
