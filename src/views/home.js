import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Feature from '../components/feature'
import Selector from '../components/selector'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>APS-7-UNIP</title>
        <meta name="description" content="APS-7-UNIP" />
        <meta property="og:title" content="APS-7-UNIP" />
        <meta property="og:description" content="APS-7-UNIP" />
      </Helmet>
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
                  <a href="#features" className="home-link link">
                    Sobre nós
                  </a>
                  <span className="link">Como funciona</span>
                  <span className="link">Professores</span>
                  <a href="#find" className="home-link01 link">
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
                    <div data-thq="thq-close-menu" className="home-menu-close">
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
                    <span className="home-text02">About</span>
                    <span className="home-text03">Features</span>
                    <span className="home-text04">Pricing</span>
                    <span className="home-text05">Team</span>
                    <span className="home-text06">Blog</span>
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
                  <span className="home-text07">Transforme vidas,</span>
                  <br className="home-text08"></br>
                  <span className="home-text09"> Mude o mundo.</span>
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
                  <span className="home-text14">inovação</span>
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
              <h2 className="home-header01">Meio ambiente transforma vidas</h2>
              <p className="home-caption1">
                Nossa missão é ajudar mais de 10.000 pessoas sem teto a se
                qualificarem para mudar de vida ajudando o  nosso planeta.
              </p>
            </div>
            <Link to="/wip" className="home-read-more button-arrow button">
              <span className="home-text15">Saiba mais</span>
              <span className="home-text16">&gt;</span>
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
                <span className="home-text18">transformadas</span>
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
                  Nossos professores são ex-alunos que fizeram parte de todos os
                  processos de aprendizados e conseguiram criar projetos
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
                  Eles, assim como você, são seres humanos e devem ser tratados
                  como tal, cada um tem uma história por trás que os levou
                  inicialmente para tal situação que, muita das vezes, não é
                  intencional. Aqueles que querem sair veem em nós a chance para
                  mudar e vida e nós vemos neles potenciais criadores que
                  ajudarão a mudar o mundo.
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
            mudar a sua vida e a de muitos além de ser ecologicamente corretos.
          </p>
        </div>
        <Link to="/wip" className="home-find1 button">
          Ver criações
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
                <button className="home-link02 button button-clean">
                  Professores
                </button>
                <button className="home-link03 button button-clean">
                  Alunos
                </button>
                <button className="home-link04 button button-clean">
                  Criações
                </button>
              </div>
              <div className="home-items1">
                <a
                  href="#how-it-works"
                  className="home-link05 button button-clean"
                >
                  Como funciona
                </a>
                <button className="home-link06 button button-clean">
                  Política de Cancelamento
                </button>
                <button className="home-link07 button button-clean">
                  Local guides
                </button>
                <button className="home-link08 button button-clean">
                  Affiliate
                </button>
              </div>
              <div className="home-items2">
                <button className="home-link09 button button-clean">
                  About us
                </button>
                <button className="home-link10 button button-clean">
                  Blog
                </button>
                <button className="home-link11 button button-clean">
                  Partners
                </button>
                <button className="home-link12 button button-clean">
                  Faqs
                </button>
                <button className="home-link13 button button-clean">
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
  )
}

export default Home
