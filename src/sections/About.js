/* eslint-disable max-len */
import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Picture from '../components/Picture';
import getPictureSize from '../helpers/PicSize';
import '../styles/sections/About.scss';

const links = {
  utfpr: 'http://www.utfpr.edu.br/',
  positivo: 'https://www.up.edu.br',
  orbital: 'https://orbitaldev.com.br/',
  yousendr: 'http://yousendr.com/',
};

class AboutSection extends React.Component {
  render() {
    return (
      <section className="mh-about bkg-dark-2" id="about">
        <Container>
          <div className="d-flex d-lg-block justify-content-center">
            <h2 className="green-title-border mb-5">Sobre mim</h2>
          </div>
          <Row className="mt-2">
            <Col md={12} lg={4} className="d-flex d-lg-block justify-content-center">
              <Picture src="coder.jpg"
                size={getPictureSize(window)} color="blue" top="12px" left="-12px"/>
              <Picture src="robotica.jpg" className="ml-4 d-none d-md-block"
                size={getPictureSize(window)} color="green" top="-12px" left="12px"/>
            </Col>
            <Col md={12} lg={8}>
              <Row>
                <Col sm={12} md={6} lg={12} className="d-flex flex-column">
                  <h3 className="mb-4 mt-4">🖥️
                    <span className="ml-1">Como tudo começou</span>
                  </h3>
                  <p className="color-light-gray">
                    Tive o meu primeiro contato com desenvolvimento aos 11 anos com
                    linguagem C. Hoje, com 24 anos, sou apaixonado por frameworks
                    JavaScript e estou buscando me especializar como Desenvolvedor
                    Fullstack JavaScript.
                  </p>
                </Col>
                <Col sm={12} md={6} lg={12} className="d-flex flex-column">
                  <h3 className="mb-4 mt-4">🎓
                    <span className="ml-1">Formação</span>
                  </h3>
                  <p className="color-light-gray">
                    Cursei o ensino médio técnico em eletrônica
                    na <a href={links.utfpr} className="color-blue" target="_blank"> UTFPR
                    </a>. Hoje sou formado em Análise e Desenvolvimento de Sistemas
                    pela <a href={links.positivo} className="color-blue" target="_blank"> Universidade Positivo.
                    </a>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} lg={12} className="d-flex flex-column">
                  <h3 className="mb-4 mt-4">💼
                    <span className="ml-1">Experiência profissional</span>
                  </h3>
                  <p className="color-light-gray">
                    Fui estagiário como Desenvolvedor Web PHP
                    na <a href={links.orbital} className="color-blue" target="_blank">
                    Orbital</a> e atualmente sou desenvolvedor web Fullstack
                    no <a href={links.yousendr} className="color-blue" target="_blank">
                    YouSendr</a> - utilizando MVC, webpack, VueJS, Vuetify e Element no
                    front-end e Google Apps Script no back-end.
                  </p>
                </Col>
                <Col sm={12} md={6} lg={12} className="d-flex flex-column">
                  <h3 className="mb-4 mt-4">🎨
                    <span className="ml-1">O que gosto de fazer</span>
                  </h3>
                  <p className="color-light-gray">
                    Como entusiasta, gosto de estudar temas relacionados a UI/UX design,
                    eletrônica, robótica e automação com Arduino.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutSection;
