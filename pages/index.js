import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Feature from '../components/feature'
import Selector from '../components/selector'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>APS-7-UNIP</title>
          <meta name="description" content="APS-7-UNIP" />
          <meta property="og:title" content="APS-7-UNIP" />
          <meta property="og:description" content="APS-7-UNIP" />
        </Head>
        <section className="home-hero">
          <div className="home-main">
            <div className="home-video">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU3fHxoYXBweXxlbnwwfHx8fDE2ODIxMDAxNTk&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="home-image"
              />
              <div className="home-tint"></div>
            </div>
            <div className="home-content">
              <header data-thq="thq-navbar" className="home-navbar">
                <img
                  alt="logo"
                  src="/playground_assets/logo.svg"
                  className="home-logo"
                />
                <div data-thq="thq-burger-menu" className="home-menu">
                  <div className="home-links">
                    <Link href="/wip">
                      <a className="home-link link">Sobre nós</a>
                    </Link>
                    <Link href="/wip">
                      <a className="home-link01 link">Como funciona</a>
                    </Link>
                    <Link href="/area-dos-professores">
                      <a className="home-link02 link">Professores</a>
                    </Link>
                    <a href="#find" className="home-link03 link">
                      Alunos
                    </a>
                  </div>
                  <button className="home-hamburger button">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="home-nav"
                  >
                    <div className="home-container1">
                      <img
                        alt="image"
                        src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                        className="home-image1"
                      />
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <nav
                      data-thq="thq-mobile-menu-nav-links"
                      data-role="Nav"
                      className="home-nav1"
                    >
                      <span className="home-text">About</span>
                      <span className="home-text01">Features</span>
                      <span className="home-text02">Pricing</span>
                      <span className="home-text03">Team</span>
                      <span className="home-text04">Blog</span>
                    </nav>
                    <div className="home-container2">
                      <button className="home-login button">Login</button>
                      <button className="button">Register</button>
                    </div>
                  </div>
                  <div className="home-icon-group">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon04"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </header>
              <div className="home-center">
                <div className="home-heading">
                  <h1 className="home-header">
                    <span className="home-text05">Transforme vidas,</span>
                    <br className="home-text06"></br>
                    <span className="home-text07"> Mude o mundo.</span>
                    <br></br>
                  </h1>
                  <p className="home-caption">
                    <span>Conheça os melhores professores e alunos</span>
                    <br></br>
                    <span>
                      Descubra um mundo de
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text12">inovação</span>
                  </p>
                  <button className="home-option button-option button">
                    Conhecer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="features" className="home-feaures">
            <div className="home-content01">
              <Feature
                Header="Qualidade e Paixão"
                Description="Somos apaixonados pela nossa missão buscando a melhor qualidade de ensino."
              ></Feature>
              <Feature
                Icon="/playground_assets/headset.svg"
                Header="Suporte - 24/7"
                Description="Comprometidos em te ajudar seja onde for. Atendemos em diversos idiomas."
              ></Feature>
              <Feature
                Icon="/playground_assets/person.svg"
                Header="Humanidade"
                Description="Todos merecem mais uma chance. Acreditamos no seu potencial e ajudaremos a sair de sua situação."
              ></Feature>
            </div>
          </div>
        </section>
        <Selector rootClassName="selector-root-class-name"></Selector>
        <section className="home-testimonials">
          <div className="home-content02">
            <div className="home-heading1">
              <span className="home-title">Fundador</span>
              <p className="home-quote">
                “Cada vida transformada é um mundo que, para aquela pessoa, já
                mudou.”
              </p>
            </div>
            <div className="home-details">
              <div className="home-author">
                <img
                  alt="image"
                  src="/playground_assets/channels4_profile-200h.jpg"
                  className="home-avatar"
                />
                <span className="home-name">Gabriel Toth</span>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="home-highlights">
          <div className="home-highlight">
            <div className="home-content03">
              <div className="home-heading2">
                <h2 className="home-header01">
                  Meio ambiente transforma vidas
                </h2>
                <p className="home-caption1">
                  Nossa missão é ajudar mais de 10.000 pessoas sem teto a se
                  qualificarem para mudar de vida ajudando o  nosso planeta.
                </p>
              </div>
              <Link href="/wip">
                <a className="home-link04 button-arrow button">
                  <span className="home-text13">Saiba mais</span>
                  <span className="home-text14">&gt;</span>
                </a>
              </Link>
            </div>
            <div className="home-image2">
              <img
                alt="image"
                src="/playground_assets/highlight-1-1500w.png"
                className="home-image3"
              />
              <div className="home-rectangle"></div>
            </div>
          </div>
          <div className="home-highlight1">
            <div className="home-image4">
              <img
                alt="image"
                src="/playground_assets/highlight-2-1500w.png"
                className="home-image5"
              />
            </div>
            <div className="home-content04">
              <div className="home-heading3">
                <h2 className="home-header02">Pessoas ajudam pessoas</h2>
                <p className="home-caption2">
                  <span>
                    Nossos professores são ex-alunos que estavam na mesma
                    situação, sem teto, rumo ou qualquer expectativa de vida e
                    hoje tem suas vidas
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text16">transformadas</span>
                  <span>.</span>
                  <br></br>
                  <span>
                    Indique pessoas em situação de rua para que recebam todo o
                    suporte para que também possam mudar de vida.
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <button className="home-option1 button-option button">
                Entre em Contato
              </button>
            </div>
          </div>
        </section>
        <section className="home-faq">
          <div id="faqs" className="home-content05">
            <div className="home-heading4">
              <h2 className="home-header03">F.A.Q</h2>
              <p className="home-caption3">
                Veja as dúvidas mais frequentes e descubra mais sobre nosso
                propósito.
              </p>
            </div>
            <div className="home-accordion">
              <div
                data-role="accordion-container"
                className="accordion home-element"
              >
                <div className="home-content06">
                  <span className="home-header04">O que são vocês?</span>
                  <span
                    data-role="accordion-content"
                    className="home-description"
                  >
                    Somos uma ONG que ajuda pessoas em situação de rua a mudarem
                    de vida qualificando-as e as inserindo no mercado com um
                    propósito ainda de apoiar o meio ambiente.
                  </span>
                </div>
                <div className="home-icon-container">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon10"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon12"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element1 accordion"
              >
                <div className="home-content07">
                  <span className="home-header05">Como faço para ajudar?</span>
                  <span
                    data-role="accordion-content"
                    className="home-description1"
                  >
                    Você pode apoiar diretamente nossos alunos comprando suas
                    criações, divulgando seus projetos nas redes socias e
                    conhecendo as incríveis histórias de cada um.
                  </span>
                </div>
                <div className="home-icon-container1">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon14"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon16"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element2 accordion"
              >
                <div className="home-content08">
                  <span className="home-header06">Quem qualifica?</span>
                  <span
                    data-role="accordion-content"
                    className="home-description2"
                  >
                    Nossos professores são ex-alunos que fizeram parte de todos
                    os processos de aprendizados e conseguiram criar projetos
                    pertinentes a sociedade.
                  </span>
                </div>
                <div className="home-icon-container2">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon18"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon20"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element3 accordion"
              >
                <div className="home-content09">
                  <span className="home-header07">
                    Vocês entregam para fora do Brasil?
                  </span>
                  <span
                    data-role="accordion-content"
                    className="home-description3"
                  >
                    Todos os produtos são criados por aluno ou professores, eles
                    são entregues em qualquer lugar do Brasil e do Mundo.
                  </span>
                </div>
                <div className="home-icon-container3">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon22"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon24"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
              <div
                data-role="accordion-container"
                className="home-element4 accordion"
              >
                <div className="home-content10">
                  <span className="home-header08">Por que ajuda-los?</span>
                  <span
                    data-role="accordion-content"
                    className="home-description4"
                  >
                    Eles, assim como você, são seres humanos e devem ser
                    tratados como tal, cada um tem uma história por trás que os
                    levou inicialmente para tal situação que, muita das vezes,
                    não é intencional. Aqueles que querem sair veem em nós a
                    chance para mudar e vida e nós vemos neles potenciais
                    criadores que ajudarão a mudar o mundo.
                  </span>
                </div>
                <div className="home-icon-container4">
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-closed"
                    className="home-icon26"
                  >
                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-role="accordion-icon-open"
                    className="home-icon28"
                  >
                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="find" className="home-find">
          <div className="home-heading5">
            <h2 className="home-header09">Encontre o que deseja agora</h2>
            <p className="home-caption4">
              Veja todos os produtos criados por nossa rede de alunos capaz de
              mudar a sua vida e a de muitos além de ser ecologicamente
              corretos.
            </p>
          </div>
          <Link href="/wip">
            <a className="home-link05 button">Ver criações</a>
          </Link>
        </section>
        <section className="home-footer">
          <div className="home-content11">
            <div className="home-main1">
              <div className="home-branding">
                <div className="home-heading6">
                  <img
                    alt="image"
                    src="/playground_assets/logo.svg"
                    className="home-image6"
                  />
                  <p className="home-caption5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className="home-links1">
                <div className="home-items">
                  <button className="home-link06 button button-clean">
                    Professores
                  </button>
                  <button className="home-link07 button button-clean">
                    Alunos
                  </button>
                  <button className="home-link08 button button-clean">
                    Criações
                  </button>
                </div>
                <div className="home-items1">
                  <a
                    href="#how-it-works"
                    className="home-link09 button button-clean"
                  >
                    Como funciona
                  </a>
                  <button className="home-link10 button button-clean">
                    Política de Cancelamento
                  </button>
                  <button className="home-link11 button button-clean">
                    Local guides
                  </button>
                  <button className="home-link12 button button-clean">
                    Affiliate
                  </button>
                </div>
                <div className="home-items2">
                  <button className="home-link13 button button-clean">
                    About us
                  </button>
                  <button className="home-link14 button button-clean">
                    Blog
                  </button>
                  <button className="home-link15 button button-clean">
                    Partners
                  </button>
                  <button className="home-link16 button button-clean">
                    Faqs
                  </button>
                  <button className="home-link17 button button-clean">
                    Careers
                  </button>
                </div>
              </div>
            </div>
            <span className="home-copyright">
              © 2022 Character. All Rights Reserved.
            </span>
          </div>
        </section>
        <div>
          <DangerousHTML
            html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            min-height: 85vh;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-video {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-tint {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .home-content {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            width: 40px;
            height: 40px;
            object-fit: cover;
            object-position: left;
          }
          .home-menu {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            text-decoration: none;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-hamburger {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            aspect-ratio: 1;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.3);
          }
          .home-icon {
            fill: #ffffff;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-center {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            margin-top: auto;
            align-items: center;
            margin-bottom: auto;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 90px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-text12 {
            color: #5bc786;
            font-style: normal;
            font-weight: 700;
          }
          .home-option {
            border-width: 0px;
            background-color: rgb(250, 216, 122);
          }
          .home-feaures {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #397b53;
          }
          .home-content01 {
            gap: 140px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #f8f0e9;
          }
          .home-content02 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            color: rgb(53, 43, 42);
            font-size: 18px;
            line-height: 27px;
          }
          .home-quote {
            color: rgb(53, 43, 42);
            font-size: 40px;
            font-style: italic;
            font-family: Cormorant Infant;
            font-weight: 600;
            line-height: 48px;
          }
          .home-details {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-author {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 120px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-name {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-highlights {
            gap: 220px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 170px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-highlight {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-content03 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header01 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption1 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: left;
            font-family: Karla;
            line-height: 27px;
          }
          .home-link04 {
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-color: #949aa5;
            border-width: 1px;
            border-radius: 25px;
            padding-bottom: 16px;
            text-decoration: none;
          }
          .home-text13 {
            font-style: normal;
            font-weight: 500;
          }
          .home-text14 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image2 {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image3 {
            object-fit: cover;
          }
          .home-rectangle {
            right: -215px;
            width: 315px;
            bottom: -95px;
            height: 410px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #397b53;
          }
          .home-highlight1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image4 {
            height: 530px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content04 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header02 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: left;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption2 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: left;
            font-family: Karla;
            line-height: 27px;
          }
          .home-text16 {
            color: #397b53;
            font-style: normal;
            font-weight: 700;
          }
          .home-option1 {
            border-width: 0px;
            background-color: rgb(250, 216, 122);
          }
          .home-faq {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #e8ded5;
          }
          .home-content05 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header03 {
            color: rgb(53, 43, 42);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption3 {
            color: rgb(53, 43, 42);
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-content06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header04 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description {
            color: rgb(0, 0, 0);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon10 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon12 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header05 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description1 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon14 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon16 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content08 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header06 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon18 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon20 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header07 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description3 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon22 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon24 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-element4 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-content10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header08 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description4 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon26 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon28 {
            fill: #000000;
            width: 16px;
            height: 16px;
          }
          .home-find {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #477e5d;
          }
          .home-heading5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-family: Cormorant Infant;
            font-weight: 700;
            line-height: 60px;
          }
          .home-caption4 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            text-align: center;
            font-family: Karla;
            line-height: 27px;
          }
          .home-link05 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: rgb(250, 216, 122);
          }
          .home-link05:hover {
            opacity: 0.5;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #352b2a;
          }
          .home-content11 {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image6 {
            height: 33px;
            object-fit: cover;
          }
          .home-caption5 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .home-links1 {
            gap: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-items {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link06 {
            color: rgb(255, 255, 255);
          }
          .home-link07 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link08 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-items1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link09 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link10 {
            color: rgb(255, 255, 255);
          }
          .home-link11 {
            color: rgb(255, 255, 255);
          }
          .home-link12 {
            color: rgb(255, 255, 255);
          }
          .home-items2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link13 {
            color: rgb(255, 255, 255);
          }
          .home-link14 {
            color: rgb(255, 255, 255);
          }
          .home-link15 {
            color: rgb(255, 255, 255);
          }
          .home-link16 {
            color: rgb(255, 255, 255);
          }
          .home-link17 {
            color: rgb(255, 255, 255);
          }
          .home-copyright {
            color: #766968;
            font-size: 12px;
          }
          @media (max-width: 991px) {
            .home-image {
              height: 100%;
            }
            .home-links {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content01 {
              gap: var(--dl-space-space-fourunits);
            }
            .home-testimonials {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-highlights {
              gap: 135px;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-highlight {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .home-highlight1 {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column-reverse;
            }
            .home-element {
              border-top-width: 1px;
            }
            .home-content06 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header04 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content07 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header05 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content08 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header06 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content09 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header07 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content10 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-header08 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content11 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-branding {
              max-width: 80%;
            }
            .home-heading6 {
              gap: var(--dl-space-space-unit);
            }
            .home-links1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-main {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar {
              padding-top: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-menu {
              display: flex;
            }
            .home-links {
              display: none;
            }
            .home-center {
              padding-bottom: 100px;
            }
            .home-heading {
              gap: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .home-header {
              font-size: 40px;
              line-height: 40px;
            }
            .home-text05 {
              font-size: 40px;
              line-height: 40px;
            }
            .home-text06 {
              font-size: 40px;
              line-height: 40px;
            }
            .home-text07 {
              font-size: 40px;
              line-height: 40px;
            }
            .home-caption {
              font-size: 16px;
              max-width: 80%;
              line-height: 24px;
            }
            .home-feaures {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content01 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-testimonials {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content02 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
              width: 80%;
              align-items: center;
            }
            .home-title {
              font-size: 12px;
              text-align: center;
              line-height: 18px;
            }
            .home-quote {
              font-size: 24px;
              text-align: center;
              line-height: 28px;
            }
            .home-details {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: center;
            }
            .home-author {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-avatar {
              width: 60px;
            }
            .home-name {
              font-size: 14px;
            }
            .home-highlights {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content03 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-header01 {
              font-size: 32px;
              line-height: 30px;
            }
            .home-caption1 {
              font-size: 16px;
            }
            .home-image4 {
              width: 100%;
              height: auto;
            }
            .home-content04 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-header02 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-faq {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content05 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-header03 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption3 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-element1 {
              align-items: flex-start;
            }
            .home-element2 {
              align-items: flex-start;
            }
            .home-element3 {
              align-items: flex-start;
            }
            .home-element4 {
              align-items: flex-start;
            }
            .home-find {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .home-header09 {
              font-size: 32px;
              line-height: 31px;
            }
            .home-caption4 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content11 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-branding {
              max-width: 70%;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-image3 {
              width: 100%;
            }
            .home-rectangle {
              right: -120px;
              width: 200px;
              bottom: -110px;
            }
            .home-header04 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header05 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header06 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header07 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header08 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
