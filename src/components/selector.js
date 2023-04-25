import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Offer from './offer'
import './selector.css'

const Selector = (props) => {
  const [isAlunos, setIsAlunos] = useState(false)
  const [isTodos, setIsTodos] = useState(true)
  const [isCriacoes, setIsCriacoes] = useState(false)
  const [isProfessores, setIsProfessores] = useState(false)
  return (
    <div className={`selector-container ${props.rootClassName} `}>
      <div className="selector-main">
        <div className="selector-heading">
          <h2 className="selector-header">{props.Header}</h2>
          <p className="selector-caption">
            <span className="">
              Conheça as criações dos nossos alunos e professores. Buscamos ser
              100%
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="selector-text01">ambientalmente corretas</span>
            <span className=""> para melhorar o mundo.</span>
          </p>
        </div>
        <div className="selector-sorting">
          {isTodos && (
            <button
              type="button"
              className="selector-option button-option button"
            >
              {props.Option}
            </button>
          )}
          {!isTodos && (
            <button
              type="button"
              onClick={() => {
                setIsProfessores(false)
                setIsTodos(true)
                setIsAlunos(false)
                setIsCriacoes(false)
              }}
              className="selector-option1 button-option button"
            >
              {props.Option4}
            </button>
          )}
          {!isProfessores && (
            <button
              type="button"
              onClick={() => {
                setIsCriacoes(false)
                setIsTodos(false)
                setIsAlunos(false)
                setIsProfessores(true)
              }}
              className="button-option button"
            >
              {props.Option1}
            </button>
          )}
          {isProfessores && (
            <button
              type="button"
              className="selector-option3 button-option button"
            >
              {props.Option11}
            </button>
          )}
          {!isAlunos && (
            <button
              type="button"
              onClick={() => {
                setIsCriacoes(false)
                setIsAlunos(true)
                setIsProfessores(false)
                setIsTodos(false)
              }}
              className="button-option button"
            >
              {props.Option2}
            </button>
          )}
          {isAlunos && (
            <button
              type="button"
              className="selector-option5 button-option button"
            >
              {props.Option21}
            </button>
          )}
          {!isCriacoes && (
            <button
              type="button"
              onClick={() => {
                setIsAlunos(false)
                setIsCriacoes(true)
                setIsProfessores(false)
                setIsTodos(false)
              }}
              className="button-option button"
            >
              {props.Option3}
            </button>
          )}
          {isCriacoes && (
            <button
              type="button"
              className="selector-option7 button-option button"
            >
              {props.Option31}
            </button>
          )}
        </div>
      </div>
      <div className="selector-offers">
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container">
              <Offer
                Nome="Arthur Vieira Filho"
                Image="https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvb3IlMjBoYXBweXxlbnwwfHx8fDE2ODIxMDEyOTc&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professor, 12 Criações"
                Description="Adoro jogar basquete, cozinhar e tocar violão nas horas vagas. Sempre busco novas aventuras e desafios, mas nada supera a felicidade de passar tempo com minha filha."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container01">
              <Offer
                Nome="Celular Ecológico XII Pro"
                Image="https://images.unsplash.com/photo-1588769359427-18d4c8e22c25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvb2QlMjBjZWxscGhvbmV8ZW58MHx8fHwxNjgyMzg2NTIx&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="24.594 Vendidos - Avaliação: 4.8"
                Description="Celular genérico com descrição genérica e benefícios genéricos que qualquer outro celular tem, mas esse tem o nome XII Pro e ainda é de madeira reciclável."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container02">
              <Offer
                Nome="Lâmpada Biodegradavel"
                Image="https://images.unsplash.com/photo-1440595228939-3673bdb622b4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxlbGV0cmljaXR5fGVufDB8fHx8MTY4MjM4NjczMw&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="87.699 Vendidos - Avaliação 4.7"
                Description="Lâmpadas autônomas com sistema biodegradável e energeticamente natural. Potência de 5W, 700 Lumens, Peso: 50g."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container03">
              <Offer
                Nome="Turbina eólica caseira."
                Image="https://images.unsplash.com/photo-1558979847-53a443fab1c9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxlbGV0cmljaXR5fGVufDB8fHx8MTY4MjM4NjczMw&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="18.442 Vendidos - Avaliação: 4.5"
                Description="Turbina eólica para residências e áreas de circulação de vento. Modelos e tamanhos variados de 0.5kW/h à 3kW/h. Chega a 0kW/h sem vento.*"
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container04">
              <Offer
                Nome="Copo biodegradável"
                Image="https://images.unsplash.com/photo-1576788903709-5c3eda911324?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxiaW9kZWdyYWRhYmxlfGVufDB8fHx8MTY4MjM4NzEyNA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="20.192 Vendidos - Avaliação: 4.4"
                Description="Copos feitos com compostos biodegradáveis sem cheiro nem gosto. Um copo normal para quem se importa com a natureza."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container05">
              <Offer
                Nome="Filtros ecológicos"
                Image="https://images.unsplash.com/photo-1563391506244-af91a410fcc9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxiaW9kZWdyYWRhYmxlfGVufDB8fHx8MTY4MjM4NzEyNA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="15.998 Vendidos - Avaliação: 4.4"
                Description="Filtros e Coadores ecológicos feitos com compostos biodegradáveis. Não deixa cheiro nem gosto."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container06">
              <Offer
                Nome="Talheres biodegradáveis"
                Image="https://images.unsplash.com/photo-1648582268945-4206c1490ed7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxiaW9kZWdyYWRhYmxlfGVufDB8fHx8MTY4MjM4NzEyNA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="192.733.294 Vendidos - Avaliação: 4.3"
                Description="Aceitos até nas maiores redes de Fast Food do mundo. Talheres que não poluem o meio ambiente."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container07">
              <Offer
                Nome="Simple Tree"
                Image="https://images.unsplash.com/photo-1602925606985-2ef9b4e56b68?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxiaW9kZWdyYWRhYmxlfGVufDB8fHx8MTY4MjM4NzEyNA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="2.000.471 Vendidos - Avaliação: 4.3"
                Description="Árvores não deveriam ser difíceis. Pois bem, é para isso que vou lhe ajudar! Simplifique o plantio, já com terra adequada, instruções para manutenção e crescimento. Tenha hoje sua própria árvore de maneira rápida e fácil."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container08">
              <Offer
                Nome="Sacolas Biodegradáveis."
                Image="https://images.unsplash.com/photo-1677753727712-c79ce4c420c1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxiaW9kZWdyYWRhYmxlfGVufDB8fHx8MTY4MjM4NzczNA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="10.593.033 Vendidos - Avaliação: 4.2"
                Description="Sim, isso é uma sacola biodegradável, assim como muitas outras. Por que não conscientizar sobre o uso de sacolas? Ao invés de plástico, lindas sacolas biodegradáveis contigo."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isCriacoes && (
          <Link to="/" className="">
            <div className="selector-offer-container09">
              <Offer
                Nome="Tijolo de Bambu"
                Image="https://images.unsplash.com/photo-1614081781451-29c084a7de30?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY2fHxiYW1idSUyMHxlbnwwfHx8fDE2ODIzODc4ODA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="944.500 Vendidos - Avaliação: 4.2"
                Description="Mais resistente que de Barro, menos poluente do que qualquer outro no processo. Além de que é Fashion, não é?"
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container10">
              <Offer
                Nome="Arthur Vieira Filho"
                Image="https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvb3IlMjBoYXBweXxlbnwwfHx8fDE2ODIxMDEyOTc&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professor, 12 Criações"
                Description="Adoro jogar basquete, cozinhar e tocar violão nas horas vagas. Sempre busco novas aventuras e desafios, mas nada supera a felicidade de passar tempo com minha filha."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container11">
              <Offer
                Nome="Monica Hutska"
                Image="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM4fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjI5&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluna, 31 Criações"
                Description="Recém-formada, amante da natureza, revivida graças a novas experiências e pessoas. Grata por tudo que Deus proporcionou."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container12">
              <Offer
                Nome="Monica Hutska"
                Image="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM4fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjI5&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluna, 31 Criações"
                Description="Recém-formada, amante da natureza, revivida graças a novas experiências e pessoas. Grata por tudo que Deus proporcionou."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container13">
              <Offer
                Nome="Madalena da Silva"
                Image="https://images.unsplash.com/photo-1496813146940-1601b02f81a4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjI5&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluna, 7 Criações"
                Description='Vó de 4 netos, passei por poucas e boas. "Quando chegar ao fundo do posso da vida apenas sorria pois agora só terá como subir."'
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container14">
              <Offer
                Nome="Madalena da Silva"
                Image="https://images.unsplash.com/photo-1496813146940-1601b02f81a4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjI5&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluna, 7 Criações"
                Description='Vó de 4 netos, passei por poucas e boas. "Quando chegar ao fundo do posso da vida apenas sorria pois agora só terá como subir."'
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container15">
              <Offer
                Nome="Carlos Alencar Costa"
                Image="https://images.unsplash.com/photo-1675117414845-148db0a96915?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjUx&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluno, 6 Criações"
                Description="Ecologia até na pesca, o meio ambiente nos proporciona o que precisamos e não o que queremos, seja amigável com ele e ele será amigável com ti."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container16">
              <Offer
                Nome="Carlos Alencar Costa"
                Image="https://images.unsplash.com/photo-1675117414845-148db0a96915?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU4fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjUx&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluno, 6 Criações"
                Description="Ecologia até na pesca, o meio ambiente nos proporciona o que precisamos e não o que queremos, seja amigável com ele e ele será amigável com ti."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container17">
              <Offer
                Nome="Pedro Siqueira Neto"
                Image="https://images.unsplash.com/photo-1560885673-2cdc12600ec8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg2fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjc3&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluno, 9 Criações"
                Description="Sofri um acidente em uma de suas explorações que, apesar do choque, me incentivou a criar ajudar ecológicas para outros exploradores não passarem o que passei."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container18">
              <Offer
                Nome="Pedro Siqueira Neto"
                Image="https://images.unsplash.com/photo-1560885673-2cdc12600ec8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg2fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAyNjc3&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluno, 9 Criações"
                Description="Sofri um acidente em uma de suas explorações que, apesar do choque, me incentivou a criar ajudar ecológicas para outros exploradores não passarem o que passei."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container19">
              <Offer
                Nome="Janaina de Jesus Souza"
                Image="https://images.unsplash.com/photo-1591451855781-9eb0f9726a33?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAxMjk3&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professora, 9 Criações"
                Description="Mãe de uma princesa maravilhosa, batalhadora e genial. Seus feitos são de grande importância para a área acadêmica e escolar."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container20">
              <Offer
                Nome="Janaina de Jesus Souza"
                Image="https://images.unsplash.com/photo-1591451855781-9eb0f9726a33?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb29yJTIwaGFwcHl8ZW58MHx8fHwxNjgyMTAxMjk3&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professora, 9 Criações"
                Description="Mãe de uma princesa maravilhosa, batalhadora e genial. Seus feitos são de grande importância para a área acadêmica e escolar."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container21">
              <Offer
                Nome="Agatha Skvosvisky"
                Image="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwMnx8aGFwcHl8ZW58MHx8fHwxNjgyMTAyOTU3&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluna, 17 Criações"
                Description="Amante de livros e música, adoro passar meu tempo livre explorando novos sabores culinários. Curto também uma boa conversa sobre filosofia e história."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container22">
              <Offer
                Nome="Niko Jordan Oliveira"
                Image="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY1fHxwZW9wbGV8ZW58MHx8fHwxNjgyMzg2MzEx&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluno, 12 Criações"
                Description="Esportes é tudo na minha vida, incentivo na comunidade e em todos os projetos sociais que apoio e compareço."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container23">
              <Offer
                Nome="Fernanda Blywaer"
                Image="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxwZW9wbGV8ZW58MHx8fHwxNjgyMzY4OTY4&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluna, 7 Criações"
                Description="Viver é como um show de punk-rock, cheio de energia e intensidade, com altos e baixos, mas sempre vale a pena estar na plateia e sentir cada momento ao máximo!"
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container24">
              <Offer
                Nome="Babko Mandela"
                Image="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI1fHxwZW9wbGV8ZW58MHx8fHwxNjgyMzY4OTY4&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluno, 4 Criações"
                Description="A arte da vida é como o grafite na periferia: mesmo em meio a dificuldades e desafios, é possível criar uma obra-prima que deixe a sua marca no mundo e inspire outros a fazerem o mesmo."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container25">
              <Offer
                Nome="João Junior Yoky"
                Image="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxwZW9wbGV8ZW58MHx8fHwxNjgyMzY4OTY4&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluno, 8 Criações"
                Description="Conquistar a independência financeira é como escalar uma montanha: é preciso ter perseverança, coragem e estratégia para alcançar o topo, mas a vista lá de cima é simplesmente incrível e recompensadora. "
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isAlunos && (
          <Link to="/" className="">
            <div className="selector-offer-container26">
              <Offer
                Nome="Agatha Skvosvisky"
                Image="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwMnx8aGFwcHl8ZW58MHx8fHwxNjgyMTAyOTU3&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Aluna, 17 Criações"
                Description="Amante de livros e música, adoro passar meu tempo livre explorando novos sabores culinários. Curto também uma boa conversa sobre filosofia e história."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container27">
              <Offer
                Nome="Rute Greece Fhiur"
                Image="https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY0fHxoYXBweXxlbnwwfHx8fDE2ODIxMDAxNTk&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professora, 41 Criações"
                Description="Extrovertida e apaixonada por viagens. Gosto de explorar novas culturas, experimentar novos sabores e ouvir música indie. "
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container28">
              <Offer
                Nome="Rute Greece Fhiur"
                Image="https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY0fHxoYXBweXxlbnwwfHx8fDE2ODIxMDAxNTk&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professora, 41 Criações"
                Description="Extrovertida e apaixonada por viagens. Gosto de explorar novas culturas, experimentar novos sabores e ouvir música indie. "
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isTodos && (
          <Link to="/" className="">
            <div className="selector-offer-container29">
              <Offer
                Nome="Rogério Nilo Xavier"
                Image="https://images.unsplash.com/photo-1548213238-0da7521bd6e0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg3fHxoYXBweXxlbnwwfHx8fDE2ODIxMDAxODU&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professor, 32 Criações"
                Description="Amo andar de bicicleta, assistir documentários sobre natureza, cozinhar pratos vegetarianos e conhecer lugares históricos."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container30">
              <Offer
                Nome="Rogério Nilo Xavier"
                Image="https://images.unsplash.com/photo-1548213238-0da7521bd6e0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg3fHxoYXBweXxlbnwwfHx8fDE2ODIxMDAxODU&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professor, 32 Criações"
                Description="Amo andar de bicicleta, assistir documentários sobre natureza, cozinhar pratos vegetarianos e conhecer lugares históricos."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container31">
              <Offer
                Nome="Pamela Soares Grondler"
                Image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBlb3BsZXxlbnwwfHx8fDE2ODIzNjc5MTA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professora, 4 Criações"
                Description="Gosto de dias frios e de sentir o vento no rosto, as vezes penso em como era antigamente e isso me incentiva a querer melhorar."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container32">
              <Offer
                Nome="Joaquim Estácio Neves"
                Image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBlb3BsZXxlbnwwfHx8fDE2ODIzNjc5MTA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professor, 3 Criações"
                Description="Nada que um bom instrumento, algumas melodias e breve cânticos não melhorem o mood dos nossos dias."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container33">
              <Offer
                Nome="Jeferson Mendes Hyato"
                Image="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwZW9wbGV8ZW58MHx8fHwxNjgyMzY3OTEw&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professor, 5 Criações"
                Description='"A Vida é muito melhor quando vivida." - É a frase que levo para mim depois de tudo.'
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container34">
              <Offer
                Nome="Noyane Triksy Freeirh"
                Image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwZW9wbGV8ZW58MHx8fHwxNjgyMzY3OTEw&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professora, 22 Criações"
                Description="Em busca de melhorar a sua vida da maneira certa, pois todas as vidas importam, até mesmo a própria natureza."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
        {isProfessores && (
          <Link to="/" className="">
            <div className="selector-offer-container35">
              <Offer
                Nome="Kyan Moon"
                Image="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHBlb3BsZXxlbnwwfHx8fDE2ODIzNjc5MTA&amp;ixlib=rb-4.0.3&amp;w=400"
                Criacoes="Professor, 2 Criações"
                Description="Um machado cego pode ser tão bruto quanto um machado bom, mas é a eficiência deste último que cortará caminho rumo ao sucesso."
                className=""
              ></Offer>
            </div>
          </Link>
        )}
      </div>
      <div className="selector-pagination">
        <button className="selector-previous button-option button">
          <svg viewBox="0 0 1024 1024" className="selector-icon">
            <path
              d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
              className=""
            ></path>
          </svg>
          <span className="selector-text03">{props.text}</span>
        </button>
        <div className="selector-pages">
          <div className="selector-primary">
            <div className="selector-number-current page-current page">
              <span className="selector-text04">{props.text3}</span>
            </div>
            <Link to="/wip" className="selector-navlink36">
              <div className="selector-number page">
                <span className="selector-text05">{props.text4}</span>
              </div>
            </Link>
            <Link to="/wip" className="selector-navlink37">
              <div className="selector-number1 page">
                <span className="selector-text06">{props.text5}</span>
              </div>
            </Link>
          </div>
          <img
            alt={props.More_alt}
            src={props.More_src}
            className="selector-more"
          />
          {isTodos && (
            <Link to="/wip" className="selector-navlink38">
              <div className="selector-max-number page">
                <span className="selector-text07">{props.text2}</span>
              </div>
            </Link>
          )}
          {isCriacoes && (
            <Link to="/wip" className="selector-navlink39">
              <div className="selector-max-number1 page">
                <span className="selector-text08">{props.text23}</span>
              </div>
            </Link>
          )}
          {isAlunos && (
            <Link to="/wip" className="selector-navlink40">
              <div className="selector-max-number2 page">
                <span className="selector-text09">{props.text22}</span>
              </div>
            </Link>
          )}
          {isProfessores && (
            <Link to="/wip" className="selector-navlink41">
              <div className="selector-max-number3 page">
                <span className="selector-text10">{props.text21}</span>
              </div>
            </Link>
          )}
        </div>
        <button className="selector-next button-option button">
          <span className="selector-text11">{props.text1}</span>
          <svg viewBox="0 0 1024 1024" className="selector-icon2">
            <path
              d="M426 256l256 256-256 256-60-60 196-196-196-196z"
              className=""
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

Selector.defaultProps = {
  rootClassName: '',
  Header: 'Um mundo sustentável e humano',
  Option1: 'Professores',
  text23: '7059',
  text21: '13',
  More_src: '/playground_assets/more.svg',
  Option31: 'Criações',
  Option4: 'Todos',
  text5: '3',
  text3: '1',
  text: 'Previous',
  text4: '2',
  More_alt: 'image',
  Option21: 'Alunos',
  Option3: 'Criações',
  text2: '914',
  text22: '901',
  Option: 'Todos',
  Option11: 'Professores',
  text1: 'Next',
  Option2: 'Alunos',
}

Selector.propTypes = {
  rootClassName: PropTypes.string,
  Header: PropTypes.string,
  Option1: PropTypes.string,
  text23: PropTypes.string,
  text21: PropTypes.string,
  More_src: PropTypes.string,
  Option31: PropTypes.string,
  Option4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  More_alt: PropTypes.string,
  Option21: PropTypes.string,
  Option3: PropTypes.string,
  text2: PropTypes.string,
  text22: PropTypes.string,
  Option: PropTypes.string,
  Option11: PropTypes.string,
  text1: PropTypes.string,
  Option2: PropTypes.string,
}

export default Selector
