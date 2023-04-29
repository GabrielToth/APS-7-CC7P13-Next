import React, { useState } from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const NavFinanceiro = (props) => {
  const [isDashboard, setIsDashboard] = useState(true)
  const [isParceiros, setIsParceiros] = useState(false)
  const [isCriacoes, setIsCriacoes] = useState(false)
  return (
    <>
      <div className={`nav-financeiro-container ${props.rootClassName} `}>
        <header data-role="Header" className="nav-financeiro-header">
          <div className="nav-financeiro-container01">
            <nav className="nav-financeiro-nav">
              {isDashboard && (
                <button className="nav-financeiro-button button">
                  Dashboard
                </button>
              )}
              {!isDashboard && (
                <button className="nav-financeiro-button1 button">
                  Dashboard
                </button>
              )}
              {!isCriacoes && (
                <button className="nav-financeiro-button2 button">
                  Criações
                </button>
              )}
              {isCriacoes && (
                <button className="nav-financeiro-button3 button">
                  Criações
                </button>
              )}
              {!isParceiros && (
                <button className="nav-financeiro-button4 button">
                  Parceiros
                </button>
              )}
              {isParceiros && (
                <button className="nav-financeiro-button5 button">
                  <span>
                    <span>Parceiros</span>
                    <br></br>
                  </span>
                </button>
              )}
            </nav>
            <nav className="nav-financeiro-nav1">
              <span>
                <span>
                  Saldo:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="nav-financeiro-text004">R$ 0</span>
              </span>
            </nav>
          </div>
          <div data-role="BurgerMenu" className="nav-financeiro-burger-menu">
            <svg viewBox="0 0 1024 1024" className="nav-financeiro-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="nav-financeiro-mobile-menu">
            <nav className="nav-financeiro-nav2">
              <div className="nav-financeiro-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="nav-financeiro-image"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="nav-financeiro-close-mobile-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="nav-financeiro-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName9"></NavigationLinks>
            </nav>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="nav-financeiro-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="nav-financeiro-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="nav-financeiro-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        {isDashboard && (
          <div className="nav-financeiro-dashboard">
            <div className="nav-financeiro-container03">
              <div className="nav-financeiro-container04">
                <h1 className="nav-financeiro-text005">
                  <span>NOVOS ALUNOS</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container05">
                  <h1 className="nav-financeiro-text008">
                    <span className="nav-financeiro-text009">+5 </span>
                    <span className="nav-financeiro-text010">%</span>
                    <br className="nav-financeiro-text011"></br>
                  </h1>
                </div>
              </div>
              <div className="nav-financeiro-container06">
                <h1 className="nav-financeiro-text012">
                  <span>Despesas TOTAL</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container07">
                  <h1 className="nav-financeiro-text015">
                    <span className="nav-financeiro-text016">-2 </span>
                    <span className="nav-financeiro-text017">%</span>
                    <br className="nav-financeiro-text018"></br>
                  </h1>
                </div>
              </div>
              <div className="nav-financeiro-container08">
                <h1 className="nav-financeiro-text019">
                  <span>Valor da Companhia</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container09">
                  <h1 className="nav-financeiro-text022">
                    <span className="nav-financeiro-text023">BRL</span>
                    <span className="nav-financeiro-text024">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="nav-financeiro-text025">58.39M</span>
                  </h1>
                </div>
              </div>
              <div className="nav-financeiro-container10">
                <h1 className="nav-financeiro-text026">
                  <span>NOVOS COLABORADRES</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container11">
                  <h1 className="nav-financeiro-text029">
                    <span className="nav-financeiro-text030">+6 </span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </div>
            <img
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="nav-financeiro-pasted-image"
            />
            <div className="nav-financeiro-container12">
              <div className="nav-financeiro-container13">
                <h1 className="nav-financeiro-text032">
                  <span>Entrada</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container14">
                  <h1 className="nav-financeiro-text035">
                    <span className="nav-financeiro-text036">BRL </span>
                    <span className="nav-financeiro-text037">8.7M</span>
                    <br className="nav-financeiro-text038"></br>
                  </h1>
                </div>
              </div>
              <div className="nav-financeiro-container15">
                <h1 className="nav-financeiro-text039">
                  <span>Despesas</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container16">
                  <h1 className="nav-financeiro-text042">
                    <span className="nav-financeiro-text043">BRL </span>
                    <span className="nav-financeiro-text044">-8.1M</span>
                    <br className="nav-financeiro-text045"></br>
                  </h1>
                </div>
              </div>
              <div className="nav-financeiro-container17">
                <h1 className="nav-financeiro-text046">
                  <span>Gastos</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container18">
                  <h1 className="nav-financeiro-text049">
                    <span className="nav-financeiro-text050">BRL</span>
                    <span className="nav-financeiro-text051">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="nav-financeiro-text052">310.2K</span>
                  </h1>
                </div>
              </div>
              <div className="nav-financeiro-container19">
                <h1 className="nav-financeiro-text053">
                  <span>Total</span>
                  <br></br>
                </h1>
                <div className="nav-financeiro-container20">
                  <h1 className="nav-financeiro-text056">
                    <span className="nav-financeiro-text057">BRL</span>
                    <span className="nav-financeiro-text058">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="nav-financeiro-text059">405.5K</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
        {isCriacoes && (
          <div className="nav-financeiro-container21">
            <h1 className="nav-financeiro-text060">Nome: Rui Alencar Urich</h1>
            <h1 className="nav-financeiro-text061">RA: F982H89</h1>
            <h1 className="nav-financeiro-text062">Curso: Bioquímica</h1>
            <h1 className="nav-financeiro-text063">Turno: Manhã</h1>
          </div>
        )}
        {isCriacoes && (
          <div className="nav-financeiro-container22">
            <h1 className="nav-financeiro-text064">Matéria</h1>
            {isParceiros && (
              <h1 className="nav-financeiro-text065">
                <span>Razão Social</span>
                <br></br>
              </h1>
            )}
            <h1 className="nav-financeiro-text068">Atualizações</h1>
            <h1 className="nav-financeiro-text069">Atualizações</h1>
            <h1 className="nav-financeiro-text070">
              <span>Lançamento</span>
              <br></br>
            </h1>
          </div>
        )}
        {isCriacoes && (
          <div className="nav-financeiro-container23">
            <div className="nav-financeiro-container24">
              <h1 className="nav-financeiro-text073">Biodiversidade</h1>
              <h1 className="nav-financeiro-text074">Atividade</h1>
              <h1 className="nav-financeiro-text075">
                Atividade 01 - Diversidade
              </h1>
              <h1 className="nav-financeiro-text076">
                <span>09/03/2023</span>
                <br></br>
              </h1>
            </div>
            <div className="nav-financeiro-container25">
              <h1 className="nav-financeiro-text079">Biodiversidade</h1>
              <h1 className="nav-financeiro-text080">Material</h1>
              <h1 className="nav-financeiro-text081">
                Material 01 - Animais diversos
              </h1>
              <h1 className="nav-financeiro-text082">09/03/2023</h1>
            </div>
            <div className="nav-financeiro-container26">
              <h1 className="nav-financeiro-text083">Laboratório</h1>
              <h1 className="nav-financeiro-text084">Material</h1>
              <h1 className="nav-financeiro-text085">
                Mat 01 - Química Aplicada
              </h1>
              <h1 className="nav-financeiro-text086">08/03/2023</h1>
            </div>
            <div className="nav-financeiro-container27">
              <h1 className="nav-financeiro-text087">Química</h1>
              <h1 className="nav-financeiro-text088">Material</h1>
              <h1 className="nav-financeiro-text089">
                Mat 01 - A matéria [INTRODUÇÃO]
              </h1>
              <h1 className="nav-financeiro-text090">
                <span>07/03/2023</span>
                <br></br>
              </h1>
            </div>
            <div className="nav-financeiro-container28">
              <h1 className="nav-financeiro-text093">Informática</h1>
              <h1 className="nav-financeiro-text094">Material</h1>
              <h1 className="nav-financeiro-text095">
                Mat 01 - Introdução ao quimic
              </h1>
              <h1 className="nav-financeiro-text096">
                <span>06/03/2023</span>
                <br></br>
              </h1>
            </div>
          </div>
        )}
        {isParceiros && (
          <div className="nav-financeiro-container29">
            <div className="nav-financeiro-container30">
              <h1 className="nav-financeiro-text099">Aquário autônomo</h1>
              <h1 className="nav-financeiro-text100">
                1.0.2 - Bomba econômica
              </h1>
              <h1 className="nav-financeiro-text101">
                <span>09/05/2023</span>
                <br></br>
              </h1>
              <h1 className="nav-financeiro-text104">
                <span>Ver mais</span>
                <br></br>
              </h1>
            </div>
            <div className="nav-financeiro-container31">
              <h1 className="nav-financeiro-text107">
                Aquário Marinho autônomo
              </h1>
              <h1 className="nav-financeiro-text108">
                1.0.4 - Bomba econômica
              </h1>
              <h1 className="nav-financeiro-text109">15/03/2023</h1>
              <h1 className="nav-financeiro-text110">Ver mais</h1>
            </div>
            <div className="nav-financeiro-container32">
              <h1 className="nav-financeiro-text111">Biocarro</h1>
              <h1 className="nav-financeiro-text112">
                0.4 - Pneu de Alga processada
              </h1>
              <h1 className="nav-financeiro-text113">08/09/2023</h1>
              <h1 className="nav-financeiro-text114">Ver mais</h1>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .nav-financeiro-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nav-financeiro-header {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-end;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-financeiro-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-button {
            color: var(--dl-color-primary-300);
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: 16px;
            background-color: transparent;
          }
          .nav-financeiro-button1 {
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            background-color: transparent;
          }
          .nav-financeiro-button2 {
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: 16px;
            padding-bottom: 16px;
            background-color: transparent;
          }
          .nav-financeiro-button3 {
            color: var(--dl-color-primary-300);
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            background-color: transparent;
          }
          .nav-financeiro-button4 {
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: 16px;
            padding-bottom: 16px;
            background-color: transparent;
          }
          .nav-financeiro-button5 {
            color: var(--dl-color-primary-300);
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            background-color: transparent;
          }
          .nav-financeiro-nav1 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text004 {
            font-style: normal;
            font-weight: 700;
          }
          .nav-financeiro-burger-menu {
            display: none;
          }
          .nav-financeiro-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .nav-financeiro-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav-financeiro-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-financeiro-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .nav-financeiro-image {
            height: 2rem;
          }
          .nav-financeiro-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-financeiro-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-financeiro-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-financeiro-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-financeiro-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-financeiro-dashboard {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nav-financeiro-container03 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .nav-financeiro-container04 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 2px 0px 0px #23ad6e;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text005 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
          }
          .nav-financeiro-container05 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text008 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text009 {
            color: #444444;
            font-style: normal;
          }
          .nav-financeiro-text010 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
            font-weight: 400;
          }
          .nav-financeiro-text011 {
            font-style: normal;
          }
          .nav-financeiro-container06 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 2px 0px 0px #23ad6e;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text012 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
            text-transform: uppercase;
          }
          .nav-financeiro-container07 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text015 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text016 {
            color: #444444;
            font-style: normal;
          }
          .nav-financeiro-text017 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
            font-weight: 400;
          }
          .nav-financeiro-text018 {
            font-style: normal;
          }
          .nav-financeiro-container08 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 2px 0px 0px #ebb22a;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text019 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
            text-transform: uppercase;
          }
          .nav-financeiro-container09 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text022 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text023 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 400;
          }
          .nav-financeiro-text024 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
          }
          .nav-financeiro-text025 {
            color: var(--dl-color-gray-500);
          }
          .nav-financeiro-container10 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 2px 0px 0px #ba103e;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text026 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
          }
          .nav-financeiro-container11 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text029 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text030 {
            color: #444444;
          }
          .nav-financeiro-pasted-image {
            width: 100%;
          }
          .nav-financeiro-container12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .nav-financeiro-container13 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 5px 5px 0px rgba(212, 212, 212, 0.25);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text032 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
            text-transform: capitalize;
          }
          .nav-financeiro-container14 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text035 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text036 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
            font-weight: 400;
          }
          .nav-financeiro-text037 {
            color: var(--dl-color-gray-444);
          }
          .nav-financeiro-text038 {
            font-style: normal;
          }
          .nav-financeiro-container15 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 5px 5px 0px rgba(212, 212, 212, 0.25);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text039 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
            text-transform: capitalize;
          }
          .nav-financeiro-container16 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text042 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text043 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
            font-weight: 400;
          }
          .nav-financeiro-text044 {
            color: #444444;
            font-style: normal;
          }
          .nav-financeiro-text045 {
            font-style: normal;
          }
          .nav-financeiro-container17 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 5px 5px 0px rgba(212, 212, 212, 0.25);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text046 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
            text-transform: capitalize;
          }
          .nav-financeiro-container18 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text049 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text050 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 400;
          }
          .nav-financeiro-text051 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
          }
          .nav-financeiro-text052 {
            color: var(--dl-color-gray-444);
          }
          .nav-financeiro-container19 {
            gap: var(--dl-space-space-halfunit);
            width: 250px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-start;
            box-shadow: 2px 5px 5px 0px rgba(212, 212, 212, 0.25);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .nav-financeiro-text053 {
            color: var(--dl-color-gray-700);
            font-size: 0.875rem;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 500;
            text-transform: capitalize;
          }
          .nav-financeiro-container20 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-financeiro-text056 {
            color: var(--dl-color-gray-black);
            font-size: 1.5rem;
            font-family: Noto Sans;
            font-weight: 700;
          }
          .nav-financeiro-text057 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 400;
          }
          .nav-financeiro-text058 {
            color: var(--dl-color-gray-700);
            font-size: 1.25rem;
          }
          .nav-financeiro-text059 {
            color: var(--dl-color-gray-444);
          }
          .nav-financeiro-container21 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text060 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-financeiro-text061 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text062 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text063 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container22 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-500);
          }
          .nav-financeiro-text064 {
            color: var(--dl-color-gray-white);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text065 {
            color: var(--dl-color-gray-white);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text068 {
            color: var(--dl-color-gray-white);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text069 {
            color: var(--dl-color-gray-white);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text070 {
            color: var(--dl-color-gray-white);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container23 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nav-financeiro-container24 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text073 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text074 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text075 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text076 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container25 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text079 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text080 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text081 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text082 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container26 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text083 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text084 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text085 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text086 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container27 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text087 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text088 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text089 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text090 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container28 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text093 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text094 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text095 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text096 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container29 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nav-financeiro-container30 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text099 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text100 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text101 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text104 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container31 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text107 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text108 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text109 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text110 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-container32 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-financeiro-text111 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text112 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text113 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-text114 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-financeiro-root-class-name {
            width: 75%;
          }
          @media (max-width: 991px) {
            .nav-financeiro-container {
              width: auto;
            }
            .nav-financeiro-icon {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .nav-financeiro-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .nav-financeiro-nav {
              display: none;
              align-items: flex-start;
              flex-direction: column;
            }
            .nav-financeiro-nav1 {
              display: none;
              align-items: flex-start;
              flex-direction: column;
            }
            .nav-financeiro-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .nav-financeiro-header {
              padding: var(--dl-space-space-unit);
            }
            .nav-financeiro-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavFinanceiro.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  pastedImage_src: '/playground_assets/pastedimage-mo4h-1500h.png',
  pastedImage_alt: 'pastedImage',
}

NavFinanceiro.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default NavFinanceiro
