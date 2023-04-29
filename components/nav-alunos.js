import React, { useState } from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const NavAlunos = (props) => {
  const [isCriacao, setIsCriacao] = useState(false)
  const [isMaterias, setIsMaterias] = useState(true)
  return (
    <>
      <div className="nav-alunos-container">
        <header data-role="Header" className="nav-alunos-header">
          <div className="nav-alunos-container01">
            <nav className="nav-alunos-nav">
              <button className="nav-alunos-button button">
                {props.button}
              </button>
              <button className="nav-alunos-button1 button">
                {props.button3}
              </button>
              {!isCriacao && (
                <button className="nav-alunos-button2 button">
                  {props.button2}
                </button>
              )}
              {isCriacao && (
                <button className="nav-alunos-button3 button">
                  {props.button21}
                </button>
              )}
              {!isMaterias && (
                <button className="nav-alunos-button4 button">
                  {props.button1}
                </button>
              )}
              {isMaterias && (
                <button className="nav-alunos-button5 button">
                  {props.button11}
                </button>
              )}
            </nav>
          </div>
          <div data-role="BurgerMenu" className="nav-alunos-burger-menu">
            <svg viewBox="0 0 1024 1024" className="nav-alunos-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="nav-alunos-mobile-menu">
            <nav className="nav-alunos-nav1">
              <div className="nav-alunos-container02">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="nav-alunos-image"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="nav-alunos-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="nav-alunos-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
            </nav>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="nav-alunos-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="nav-alunos-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="nav-alunos-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="nav-alunos-container03">
          <h1 className="nav-alunos-text">{props.heading}</h1>
          <h1 className="nav-alunos-text01">{props.heading1}</h1>
          <h1 className="nav-alunos-text02">{props.heading2}</h1>
          <h1 className="nav-alunos-text03">{props.heading3}</h1>
        </div>
        <div className="nav-alunos-container04">
          <h1 className="nav-alunos-text04">{props.heading4}</h1>
          <h1 className="nav-alunos-text05">{props.heading5}</h1>
          <h1 className="nav-alunos-text06">{props.heading6}</h1>
          <h1 className="nav-alunos-text07">
            <span>Data</span>
            <br></br>
          </h1>
        </div>
        <div className="nav-alunos-container05">
          <div className="nav-alunos-container06">
            <h1 className="nav-alunos-text10">{props.heading7}</h1>
            <h1 className="nav-alunos-text11">{props.heading8}</h1>
            <h1 className="nav-alunos-text12">{props.heading9}</h1>
            <h1 className="nav-alunos-text13">
              <span>09/03/2023</span>
              <br></br>
            </h1>
          </div>
          <div className="nav-alunos-container07">
            <h1 className="nav-alunos-text16">{props.heading10}</h1>
            <h1 className="nav-alunos-text17">{props.heading11}</h1>
            <h1 className="nav-alunos-text18">{props.heading12}</h1>
            <h1 className="nav-alunos-text19">{props.heading13}</h1>
          </div>
          <div className="nav-alunos-container08">
            <h1 className="nav-alunos-text20">{props.heading14}</h1>
            <h1 className="nav-alunos-text21">{props.heading15}</h1>
            <h1 className="nav-alunos-text22">{props.heading16}</h1>
            <h1 className="nav-alunos-text23">{props.heading17}</h1>
          </div>
          <div className="nav-alunos-container09">
            <h1 className="nav-alunos-text24">{props.heading18}</h1>
            <h1 className="nav-alunos-text25">{props.heading19}</h1>
            <h1 className="nav-alunos-text26">{props.heading20}</h1>
            <h1 className="nav-alunos-text27">
              <span>07/03/2023</span>
              <br></br>
            </h1>
          </div>
          <div className="nav-alunos-container10">
            <h1 className="nav-alunos-text30">{props.heading21}</h1>
            <h1 className="nav-alunos-text31">{props.heading22}</h1>
            <h1 className="nav-alunos-text32">{props.heading23}</h1>
            <h1 className="nav-alunos-text33">
              <span>06/03/2023</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className="nav-alunos-container11">
          <div className="nav-alunos-container12">
            <h1 className="nav-alunos-text36">{props.heading24}</h1>
            <h1 className="nav-alunos-text37">{props.heading25}</h1>
            <h1 className="nav-alunos-text38">{props.heading26}</h1>
            <h1 className="nav-alunos-text39">
              <span>09/03/2023</span>
              <br></br>
            </h1>
          </div>
          <div className="nav-alunos-container13">
            <h1 className="nav-alunos-text42">{props.heading27}</h1>
            <h1 className="nav-alunos-text43">{props.heading28}</h1>
            <h1 className="nav-alunos-text44">{props.heading29}</h1>
            <h1 className="nav-alunos-text45">{props.heading30}</h1>
          </div>
          <div className="nav-alunos-container14">
            <h1 className="nav-alunos-text46">{props.heading31}</h1>
            <h1 className="nav-alunos-text47">{props.heading32}</h1>
            <h1 className="nav-alunos-text48">{props.heading33}</h1>
            <h1 className="nav-alunos-text49">{props.heading34}</h1>
          </div>
          <div className="nav-alunos-container15">
            <h1 className="nav-alunos-text50">{props.heading35}</h1>
            <h1 className="nav-alunos-text51">{props.heading36}</h1>
            <h1 className="nav-alunos-text52">{props.heading37}</h1>
            <h1 className="nav-alunos-text53">
              <span>07/03/2023</span>
              <br></br>
            </h1>
          </div>
          <div className="nav-alunos-container16">
            <h1 className="nav-alunos-text56">{props.heading38}</h1>
            <h1 className="nav-alunos-text57">{props.heading39}</h1>
            <h1 className="nav-alunos-text58">{props.heading40}</h1>
            <h1 className="nav-alunos-text59">
              <span>06/03/2023</span>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .nav-alunos-container {
            flex: 0 0 auto;
            width: 75%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nav-alunos-header {
            width: 100%;
            display: flex;
            align-self: flex-end;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .nav-alunos-container01 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .nav-alunos-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .nav-alunos-button {
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            padding-bottom: 16px;
            background-color: transparent;
          }
          .nav-alunos-button1 {
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            background-color: transparent;
          }
          .nav-alunos-button2 {
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            background-color: transparent;
          }
          .nav-alunos-button3 {
            color: var(--dl-color-primary-300);
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            background-color: transparent;
          }
          .nav-alunos-button4 {
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            background-color: transparent;
          }
          .nav-alunos-button5 {
            color: var(--dl-color-primary-300);
            padding: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: 16px;
            background-color: transparent;
          }
          .nav-alunos-burger-menu {
            display: none;
          }
          .nav-alunos-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .nav-alunos-mobile-menu {
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
          .nav-alunos-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-alunos-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .nav-alunos-image {
            height: 2rem;
          }
          .nav-alunos-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-alunos-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-alunos-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-alunos-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-alunos-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-alunos-container03 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-alunos-text01 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text02 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text03 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container04 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-500);
          }
          .nav-alunos-text04 {
            color: var(--dl-color-gray-white);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text05 {
            color: var(--dl-color-gray-white);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text06 {
            color: var(--dl-color-gray-white);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text07 {
            color: var(--dl-color-gray-white);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nav-alunos-container06 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text10 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text11 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text12 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text13 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container07 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text16 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text17 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text18 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text19 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container08 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text20 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text21 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text22 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text23 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container09 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text24 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text25 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text26 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text27 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container10 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text30 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text31 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text32 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text33 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .nav-alunos-container12 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text36 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text37 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text38 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text39 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container13 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text42 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text43 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text44 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text45 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container14 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text46 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text47 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text48 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text49 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container15 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text50 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text51 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text52 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text53 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-container16 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .nav-alunos-text56 {
            color: var(--dl-color-gray-black);
            width: 170px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text57 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text58 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .nav-alunos-text59 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .nav-alunos-container {
              width: auto;
            }
            .nav-alunos-icon {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .nav-alunos-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .nav-alunos-nav {
              display: none;
              align-items: flex-start;
              flex-direction: column;
            }
            .nav-alunos-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .nav-alunos-header {
              padding: var(--dl-space-space-unit);
            }
            .nav-alunos-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavAlunos.defaultProps = {
  heading: 'Nome: Rui Alencar Urich',
  heading1: 'RA: F982H89',
  heading2: 'Curso: Bioquímica',
  heading3: 'Turno: Manhã',
  heading4: 'Matéria',
  heading5: 'Lançamento',
  heading6: 'Título',
  heading7: 'Biodiversidade',
  heading8: 'Atividade',
  heading9: 'Atividade 01 - Diversidade',
  heading10: 'Biodiversidade',
  heading11: 'Material',
  heading12: 'Material 01 - Animais diversos',
  heading13: '09/03/2023',
  heading14: 'Laboratório',
  heading15: 'Material',
  heading16: 'Mat 01 - Química Aplicada',
  heading17: '08/03/2023',
  heading18: 'Química',
  heading19: 'Material',
  heading20: 'Mat 01 - A matéria [INTRODUÇÃO]',
  heading21: 'Informática',
  heading22: 'Material',
  heading23: 'Mat 01 - Introdução ao quimic',
  heading24: 'Biodiversidade',
  heading25: 'Atividade',
  heading26: 'Atividade 01 - Diversidade',
  heading27: 'Biodiversidade',
  heading28: 'Material',
  heading29: 'Material 01 - Animais diversos',
  heading30: '09/03/2023',
  heading31: 'Laboratório',
  heading32: 'Material',
  heading33: 'Mat 01 - Química Aplicada',
  heading34: '08/03/2023',
  heading35: 'Química',
  heading36: 'Material',
  heading37: 'Mat 01 - A matéria [INTRODUÇÃO]',
  heading38: 'Informática',
  heading39: 'Material',
  heading40: 'Mat 01 - Introdução ao quimic',
  text: 'Notas',
  text1: 'Faltas',
  text2: 'Matérias',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  image_alt: 'image',
  button: 'Notas',
  button1: 'Matérias',
  button2: 'Criações',
  button3: 'Faltas',
  button11: 'Matérias',
  button21: 'Criações',
}

NavAlunos.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  heading4: PropTypes.string,
  heading5: PropTypes.string,
  heading6: PropTypes.string,
  heading7: PropTypes.string,
  heading8: PropTypes.string,
  heading9: PropTypes.string,
  heading10: PropTypes.string,
  heading11: PropTypes.string,
  heading12: PropTypes.string,
  heading13: PropTypes.string,
  heading14: PropTypes.string,
  heading15: PropTypes.string,
  heading16: PropTypes.string,
  heading17: PropTypes.string,
  heading18: PropTypes.string,
  heading19: PropTypes.string,
  heading20: PropTypes.string,
  heading21: PropTypes.string,
  heading22: PropTypes.string,
  heading23: PropTypes.string,
  heading24: PropTypes.string,
  heading25: PropTypes.string,
  heading26: PropTypes.string,
  heading27: PropTypes.string,
  heading28: PropTypes.string,
  heading29: PropTypes.string,
  heading30: PropTypes.string,
  heading31: PropTypes.string,
  heading32: PropTypes.string,
  heading33: PropTypes.string,
  heading34: PropTypes.string,
  heading35: PropTypes.string,
  heading36: PropTypes.string,
  heading37: PropTypes.string,
  heading38: PropTypes.string,
  heading39: PropTypes.string,
  heading40: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string,
  button3: PropTypes.string,
  button11: PropTypes.string,
  button21: PropTypes.string,
}

export default NavAlunos
