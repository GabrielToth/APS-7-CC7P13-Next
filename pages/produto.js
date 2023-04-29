import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Produto = (props) => {
  return (
    <>
      <div className="produto-container">
        <Head>
          <title>Produto - APS-7-UNIP</title>
          <meta name="description" content="APS-7-UNIP" />
          <meta property="og:title" content="Produto - APS-7-UNIP" />
          <meta property="og:description" content="APS-7-UNIP" />
        </Head>
        <header data-thq="thq-navbar" className="produto-navbar">
          <img
            alt="logo"
            src="/playground_assets/logo.svg"
            className="produto-logo"
          />
          <div data-thq="thq-burger-menu" className="produto-menu">
            <div className="produto-links">
              <Link href="/wip">
                <a className="produto-link link">Sobre nós</a>
              </Link>
              <Link href="/wip">
                <a className="produto-link1 link">Como funciona</a>
              </Link>
              <Link href="/area-dos-professores">
                <a className="produto-link2 link">Professores</a>
              </Link>
              <Link href="/area-dos-alunos">
                <a className="produto-link3 link">Alunos</a>
              </Link>
            </div>
            <button className="produto-hamburger button">
              <svg
                viewBox="0 0 1024 1024"
                filter="invert(100%)"
                className="produto-icon"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="produto-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="produto-nav"
            >
              <div className="produto-container1">
                <img
                  alt="logo"
                  src="/playground_assets/logo.svg"
                  className="produto-logo1"
                />
                <div data-thq="thq-close-menu" className="produto-menu-close">
                  <svg viewBox="0 0 1024 1024" className="produto-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="produto-nav1"
              >
                <Link href="/wip">
                  <a className="produto-link4 link">Sobre nós</a>
                </Link>
                <Link href="/wip">
                  <a className="produto-link5 link">Como funciona</a>
                </Link>
                <Link href="/area-dos-professores">
                  <a className="produto-link6 link">Professores</a>
                </Link>
                <Link href="/area-dos-alunos">
                  <a className="produto-link7 link">Alunos</a>
                </Link>
                <Link href="/area-financeira">
                  <a className="produto-link8 link">
                    <span>Financeiro</span>
                    <br></br>
                  </a>
                </Link>
              </nav>
              <div className="produto-container2">
                <button className="produto-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="produto-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="produto-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="produto-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="produto-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="produto-container3">
          <img
            src="https://images.unsplash.com/photo-1588769359427-18d4c8e22c25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvb2QlMjBjZWxscGhvbmV8ZW58MHx8fHwxNjgyMzg2NTIx&amp;ixlib=rb-4.0.3&amp;w=800"
            alt="image"
            className="produto-image"
          />
          <div className="produto-container4">
            <h1 className="produto-text02">Celular Ecológico XII Pro</h1>
            <div className="produto-container5">
              <h2 className="produto-text03">Vendidos: 24.594</h2>
              <h2 className="produto-text04">Avaliação: 4.8</h2>
            </div>
            <p className="produto-text05">
              <span>
                Celular genérico com descrição genérica e benefícios genéricos
                que qualquer outro celular tem, mas esse tem o nome XII Pro e
                ainda é de madeira reciclável.
              </span>
              <br></br>
              <br></br>
              <span>
                Processador: 1x 3.19 GHz Cortex-X2 + 3x 2.75 GHz Cortex-A710 +
                4x 1.80 GHz Cortex-A510
              </span>
              <br></br>
              <br></br>
              <span>Chipset: Snapdragon 8 Plus Gen 1 Qualcomm SM8475</span>
              <br></br>
              <br></br>
              <span>GPU: Adreno 730</span>
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .produto-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .produto-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .produto-logo {
            width: 40px;
            height: 40px;
            object-fit: cover;
            object-position: left;
          }
          .produto-menu {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .produto-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .produto-link {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-link1 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-link2 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-link3 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-hamburger {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            aspect-ratio: 1;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.3);
          }
          .produto-icon {
            fill: #ffffff;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .produto-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .produto-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .produto-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .produto-logo1 {
            width: 40px;
            height: 40px;
            object-fit: cover;
            object-position: left;
          }
          .produto-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .produto-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .produto-nav1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .produto-link4 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-link5 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-link6 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-link7 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-link8 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .produto-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .produto-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .produto-icon-group {
            display: flex;
          }
          .produto-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .produto-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .produto-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .produto-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .produto-image {
            width: 50%;
            height: 100%;
            object-fit: cover;
          }
          .produto-container4 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .produto-text02 {
            color: var(--dl-color-gray-444);
          }
          .produto-container5 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .produto-text03 {
            color: var(--dl-color-gray-444);
          }
          .produto-text04 {
            color: var(--dl-color-gray-444);
          }
          .produto-text05 {
            color: var(--dl-color-gray-444);
            width: 100%;
          }
          @media (max-width: 991px) {
            .produto-links {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .produto-navbar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .produto-menu {
              display: flex;
            }
            .produto-links {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .produto-navbar {
              padding: var(--dl-space-space-unit);
            }
            .produto-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Produto
