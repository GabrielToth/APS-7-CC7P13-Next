import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const AreaDosProfessores = (props) => {
  return (
    <>
      <div className="area-dos-professores-container">
        <Head>
          <title>AreaDosProfessores - APS-7-UNIP</title>
          <meta name="description" content="APS-7-UNIP" />
          <meta property="og:title" content="AreaDosProfessores - APS-7-UNIP" />
          <meta property="og:description" content="APS-7-UNIP" />
        </Head>
        <header data-role="Header" className="area-dos-professores-header">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="area-dos-professores-image"
          />
          <div className="area-dos-professores-container01">
            <nav className="area-dos-professores-nav">
              <span className="area-dos-professores-text">Notas</span>
              <span className="area-dos-professores-text001">Faltas</span>
              <span className="area-dos-professores-text002">Matérias</span>
            </nav>
          </div>
          <div
            data-role="BurgerMenu"
            className="area-dos-professores-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="area-dos-professores-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-role="MobileMenu"
            className="area-dos-professores-mobile-menu"
          >
            <nav className="area-dos-professores-nav1">
              <div className="area-dos-professores-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="area-dos-professores-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="area-dos-professores-close-mobile-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="area-dos-professores-icon02"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
            </nav>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="area-dos-professores-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="area-dos-professores-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="area-dos-professores-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="area-dos-professores-container03">
          <nav className="area-dos-professores-sidebar">
            <div className="area-dos-professores-nav-itens">
              <div className="area-dos-professores-nav-item">
                <span className="area-dos-professores-text003">Períodos</span>
                <div className="area-dos-professores-options">
                  <span className="area-dos-professores-text004">
                    <span>Manhã</span>
                    <br></br>
                  </span>
                  <span className="area-dos-professores-text007">
                    <span>Tarde</span>
                    <br></br>
                  </span>
                  <span className="area-dos-professores-text010">
                    <span>Noite</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="area-dos-professores-nav-item1">
                <span className="area-dos-professores-text013">Séries</span>
                <div className="area-dos-professores-options1">
                  <span className="area-dos-professores-text014">
                    1° Séries
                  </span>
                  <span className="area-dos-professores-text015">
                    2° Séries
                  </span>
                  <span className="area-dos-professores-text016">
                    3° Séries
                  </span>
                  <span className="area-dos-professores-text017">Ver mais</span>
                </div>
              </div>
              <div className="area-dos-professores-nav-item2">
                <span className="area-dos-professores-text018">
                  <span>CURSOS</span>
                  <br></br>
                </span>
                <div className="area-dos-professores-options2">
                  <span className="area-dos-professores-text021">
                    [001-1-1] Biomecânica
                  </span>
                  <span className="area-dos-professores-text022">
                    [001-2-1] Biomêcanica
                  </span>
                  <span className="area-dos-professores-text023">
                    [002-5-3] Biomedicina
                  </span>
                  <span className="area-dos-professores-text024">Ver mais</span>
                </div>
              </div>
              <div className="area-dos-professores-nav-item3">
                <span className="area-dos-professores-text025">
                  <span>Matéria</span>
                  <br></br>
                </span>
                <div className="area-dos-professores-options3">
                  <span className="area-dos-professores-text028">
                    Informática
                  </span>
                  <span className="area-dos-professores-text029">
                    Laboratório
                  </span>
                  <span className="area-dos-professores-text030">Ciências</span>
                  <span className="area-dos-professores-text031">Ver mais</span>
                </div>
              </div>
            </div>
            <div className="area-dos-professores-profile">
              <div className="area-dos-professores-container04">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;w=200"
                  className="area-dos-professores-image2"
                />
                <div className="area-dos-professores-container05">
                  <span className="area-dos-professores-text032">John Doe</span>
                  <span className="area-dos-professores-text033">
                    Professor
                  </span>
                </div>
              </div>
              <h1 className="area-dos-professores-text034">...</h1>
            </div>
          </nav>
          <div className="area-dos-professores-container06">
            <div className="area-dos-professores-container07">
              <h1 className="area-dos-professores-text035">
                Curso: Biomecânica
              </h1>
              <h1 className="area-dos-professores-text036">
                Matéria: Informática
              </h1>
              <h1 className="area-dos-professores-text037">Série: 1</h1>
              <h1 className="area-dos-professores-text038">Período: Manhã</h1>
            </div>
            <div className="area-dos-professores-container08">
              <h1 className="area-dos-professores-text039">RA</h1>
              <h1 className="area-dos-professores-text040">Cursando</h1>
              <h1 className="area-dos-professores-text041">Nome</h1>
              <h1 className="area-dos-professores-text042">
                <span>Faltas</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container09">
              <h1 className="area-dos-professores-text045">U3F0SAC</h1>
              <h1 className="area-dos-professores-text046">Ativo</h1>
              <h1 className="area-dos-professores-text047">
                Roberto Almeida da Silva
              </h1>
              <h1 className="area-dos-professores-text048">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container10">
              <h1 className="area-dos-professores-text051">OF289HA</h1>
              <h1 className="area-dos-professores-text052">Inativo</h1>
              <h1 className="area-dos-professores-text053">Ana Biorge Hui</h1>
              <h1 className="area-dos-professores-text054">
                <span>3</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container11">
              <h1 className="area-dos-professores-text057">F982H89</h1>
              <h1 className="area-dos-professores-text058">Ativo</h1>
              <h1 className="area-dos-professores-text059">
                Rui Alencar Urich
              </h1>
              <h1 className="area-dos-professores-text060">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container12">
              <h1 className="area-dos-professores-text063">8V1GPDA</h1>
              <h1 className="area-dos-professores-text064">Ativo</h1>
              <h1 className="area-dos-professores-text065">
                Humberto Doisberto Tresberto
              </h1>
              <h1 className="area-dos-professores-text066">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container13">
              <h1 className="area-dos-professores-text069">9G83H9S</h1>
              <h1 className="area-dos-professores-text070">Ativo</h1>
              <h1 className="area-dos-professores-text071">Adriana de Jesus</h1>
              <h1 className="area-dos-professores-text072">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container14">
              <h1 className="area-dos-professores-text075">GGJ884R</h1>
              <h1 className="area-dos-professores-text076">Ativo</h1>
              <h1 className="area-dos-professores-text077">
                Fabiana Costa Souza
              </h1>
              <h1 className="area-dos-professores-text078">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container15">
              <h1 className="area-dos-professores-text081">9GJ498J</h1>
              <h1 className="area-dos-professores-text082">Inativo</h1>
              <h1 className="area-dos-professores-text083">
                Alencar Albuquerque Putch
              </h1>
              <h1 className="area-dos-professores-text084">
                <span>1</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container16">
              <h1 className="area-dos-professores-text087">D28D9AQ</h1>
              <h1 className="area-dos-professores-text088">Ativo</h1>
              <h1 className="area-dos-professores-text089">Escarlate Ado</h1>
              <h1 className="area-dos-professores-text090">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container17">
              <h1 className="area-dos-professores-text093">GJ398GJ</h1>
              <h1 className="area-dos-professores-text094">Ativo</h1>
              <h1 className="area-dos-professores-text095">Flui Gonsales </h1>
              <h1 className="area-dos-professores-text096">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container18">
              <h1 className="area-dos-professores-text099">M409GEW</h1>
              <h1 className="area-dos-professores-text100">Ativo</h1>
              <h1 className="area-dos-professores-text101">Ramon Yuri Pleno</h1>
              <h1 className="area-dos-professores-text102">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container19">
              <h1 className="area-dos-professores-text105">QDK29J0</h1>
              <h1 className="area-dos-professores-text106">Ativo</h1>
              <h1 className="area-dos-professores-text107">Tuti Hybrid</h1>
              <h1 className="area-dos-professores-text108">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container20">
              <h1 className="area-dos-professores-text111">G04K0G9</h1>
              <h1 className="area-dos-professores-text112">Ativo</h1>
              <h1 className="area-dos-professores-text113">Joaquim Moacir</h1>
              <h1 className="area-dos-professores-text114">
                <span>1</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container21">
              <h1 className="area-dos-professores-text117">2J98FWW</h1>
              <h1 className="area-dos-professores-text118">Ativo</h1>
              <h1 className="area-dos-professores-text119">
                Leyla Gomes Junes
              </h1>
              <h1 className="area-dos-professores-text120">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container22">
              <h1 className="area-dos-professores-text123">F3J0J03</h1>
              <h1 className="area-dos-professores-text124">Inativo</h1>
              <h1 className="area-dos-professores-text125">Yambev Troia Doc</h1>
              <h1 className="area-dos-professores-text126">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container23">
              <h1 className="area-dos-professores-text129">FHJ9W8H</h1>
              <h1 className="area-dos-professores-text130">Ativo</h1>
              <h1 className="area-dos-professores-text131">
                Gabriel Gonçalves Roi
              </h1>
              <h1 className="area-dos-professores-text132">
                <span>3</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container24">
              <h1 className="area-dos-professores-text135">FEJK09J</h1>
              <h1 className="area-dos-professores-text136">Ativo</h1>
              <h1 className="area-dos-professores-text137">
                Youtu Berda Silva
              </h1>
              <h1 className="area-dos-professores-text138">
                <span>2</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container25">
              <h1 className="area-dos-professores-text141">MJ7J809</h1>
              <h1 className="area-dos-professores-text142">Ativo</h1>
              <h1 className="area-dos-professores-text143">Barsa Gonsalo</h1>
              <h1 className="area-dos-professores-text144">
                <span>0</span>
                <br></br>
              </h1>
            </div>
            <div className="area-dos-professores-container26">
              <h1 className="area-dos-professores-text147">K0U67HJ</h1>
              <h1 className="area-dos-professores-text148">Ativo</h1>
              <h1 className="area-dos-professores-text149">
                Ramon Morales de Souza
              </h1>
              <h1 className="area-dos-professores-text150">
                <span>0</span>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .area-dos-professores-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .area-dos-professores-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .area-dos-professores-image {
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            object-position: left;
          }
          .area-dos-professores-container01 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .area-dos-professores-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .area-dos-professores-text001 {
            color: var(--dl-color-primary-300);
          }
          .area-dos-professores-burger-menu {
            display: none;
          }
          .area-dos-professores-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .area-dos-professores-mobile-menu {
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
          .area-dos-professores-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .area-dos-professores-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .area-dos-professores-image1 {
            height: 2rem;
          }
          .area-dos-professores-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .area-dos-professores-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .area-dos-professores-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .area-dos-professores-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .area-dos-professores-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .area-dos-professores-container03 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .area-dos-professores-sidebar {
            width: 300px;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .area-dos-professores-nav-itens {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .area-dos-professores-nav-item {
            display: flex;
            flex-direction: column;
          }
          .area-dos-professores-text003 {
            font-family: Roboto Mono;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .area-dos-professores-options {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .area-dos-professores-text004 {
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text007 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text010 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-nav-item1 {
            display: flex;
            flex-direction: column;
          }
          .area-dos-professores-text013 {
            font-family: Roboto Mono;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .area-dos-professores-options1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .area-dos-professores-text014 {
            color: var(--dl-color-primary-300);
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text015 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text016 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text017 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-nav-item2 {
            display: flex;
            flex-direction: column;
          }
          .area-dos-professores-text018 {
            font-family: Roboto Mono;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .area-dos-professores-options2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .area-dos-professores-text021 {
            color: var(--dl-color-primary-300);
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text022 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text023 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text024 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-nav-item3 {
            display: flex;
            flex-direction: column;
          }
          .area-dos-professores-text025 {
            font-family: Roboto Mono;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .area-dos-professores-options3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .area-dos-professores-text028 {
            color: var(--dl-color-primary-300);
            font-style: normal;
            text-align: left;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text029 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text030 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-text031 {
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 400;
          }
          .area-dos-professores-profile {
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
          .area-dos-professores-container04 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .area-dos-professores-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .area-dos-professores-container05 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: space-between;
          }
          .area-dos-professores-text032 {
            font-size: 1.15rem;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          .area-dos-professores-text033 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
          }
          .area-dos-professores-text034 {
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            letter-spacing: 2px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .area-dos-professores-container06 {
            flex: 0 0 auto;
            width: 75%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .area-dos-professores-container07 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text035 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
            margin-left: var(--dl-space-space-twounits);
          }
          .area-dos-professores-text036 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text037 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text038 {
            font-size: 1rem;
            font-style: normal;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container08 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-500);
          }
          .area-dos-professores-text039 {
            color: var(--dl-color-gray-white);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text040 {
            color: var(--dl-color-gray-white);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text041 {
            color: var(--dl-color-gray-white);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text042 {
            color: var(--dl-color-gray-white);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container09 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text045 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text046 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text047 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text048 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container10 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text051 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text052 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text053 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text054 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container11 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text057 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text058 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text059 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text060 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container12 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text063 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text064 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text065 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text066 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container13 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text069 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text070 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text071 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text072 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container14 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text075 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text076 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text077 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text078 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container15 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text081 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text082 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text083 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text084 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container16 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text087 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text088 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text089 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text090 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container17 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text093 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text094 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text095 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text096 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container18 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text099 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text100 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text101 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text102 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container19 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text105 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text106 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text107 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text108 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container20 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text111 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text112 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text113 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text114 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container21 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text117 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text118 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text119 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text120 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container22 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text123 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text124 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text125 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text126 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container23 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text129 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text130 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text131 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text132 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container24 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text135 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text136 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text137 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text138 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container25 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text141 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text142 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text143 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text144 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-container26 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            height: 50px;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: flex-start;
          }
          .area-dos-professores-text147 {
            color: var(--dl-color-gray-black);
            width: 80px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text148 {
            color: var(--dl-color-gray-black);
            width: 120px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text149 {
            color: var(--dl-color-gray-black);
            width: 300px;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          .area-dos-professores-text150 {
            color: var(--dl-color-gray-black);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Roboto Mono;
            font-weight: 600;
          }
          @media (max-width: 991px) {
            .area-dos-professores-icon {
              display: flex;
            }
            .area-dos-professores-container03 {
              justify-content: flex-start;
            }
            .area-dos-professores-profile {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .area-dos-professores-image2 {
              margin-left: 0px;
            }
            .area-dos-professores-container06 {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .area-dos-professores-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .area-dos-professores-nav {
              display: none;
              align-items: flex-start;
              flex-direction: column;
            }
            .area-dos-professores-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .area-dos-professores-text001 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .area-dos-professores-text002 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .area-dos-professores-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .area-dos-professores-header {
              padding: var(--dl-space-space-unit);
            }
            .area-dos-professores-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AreaDosProfessores
