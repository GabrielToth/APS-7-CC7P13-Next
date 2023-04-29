import React from 'react'
import Head from 'next/head'

import NavAlunos from '../components/nav-alunos'

const AreaDosAlunos = (props) => {
  return (
    <>
      <div className="area-dos-alunos-container">
        <Head>
          <title>AreaDosAlunos - APS-7-UNIP</title>
          <meta name="description" content="APS-7-UNIP" />
          <meta property="og:title" content="AreaDosAlunos - APS-7-UNIP" />
          <meta property="og:description" content="APS-7-UNIP" />
        </Head>
        <div className="area-dos-alunos-container1">
          <nav className="area-dos-alunos-sidebar">
            <div className="area-dos-alunos-nav-itens">
              <div className="area-dos-alunos-nav-item">
                <img
                  alt="logo"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="area-dos-alunos-image"
                />
                <span className="area-dos-alunos-text">Matéria</span>
                <div className="area-dos-alunos-options">
                  <span className="area-dos-alunos-text01">
                    <span>Informática</span>
                    <br></br>
                  </span>
                  <span className="area-dos-alunos-text04">
                    <span>Química</span>
                    <br></br>
                  </span>
                  <span className="area-dos-alunos-text07">
                    <span>Laboratório</span>
                    <br></br>
                  </span>
                  <span className="area-dos-alunos-text10">Biodiversidade</span>
                  <span className="area-dos-alunos-text11">Biologia</span>
                </div>
              </div>
            </div>
            <div className="area-dos-alunos-profile">
              <div className="area-dos-alunos-container2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1596419249688-aecfbe1ae6bb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwZmFjZXxlbnwwfHx8fDE2ODI3ODM1Njg&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="area-dos-alunos-image1"
                />
                <div className="area-dos-alunos-container3">
                  <span className="area-dos-alunos-text12">
                    Rui Alencar Urich
                  </span>
                  <span className="area-dos-alunos-text13">Aluno</span>
                </div>
              </div>
              <h1 className="area-dos-alunos-text14">...</h1>
            </div>
          </nav>
          <NavAlunos></NavAlunos>
        </div>
      </div>
      <style jsx>
        {`
          .area-dos-alunos-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .area-dos-alunos-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .area-dos-alunos-sidebar {
            width: 300px;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .area-dos-alunos-nav-itens {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .area-dos-alunos-nav-item {
            display: flex;
            flex-direction: column;
          }
          .area-dos-alunos-image {
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
            object-position: left;
          }
          .area-dos-alunos-text {
            font-family: Roboto Mono;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .area-dos-alunos-options {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .area-dos-alunos-text01 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-alunos-text04 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-alunos-text07 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-alunos-text10 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-alunos-text11 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-alunos-profile {
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
          .area-dos-alunos-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .area-dos-alunos-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .area-dos-alunos-container3 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .area-dos-alunos-text12 {
            font-size: 1.15rem;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          .area-dos-alunos-text13 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
          }
          .area-dos-alunos-text14 {
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            letter-spacing: 2px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 991px) {
            .area-dos-alunos-container1 {
              justify-content: flex-start;
            }
            .area-dos-alunos-profile {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .area-dos-alunos-image1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AreaDosAlunos
