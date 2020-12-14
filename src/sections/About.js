import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Picture from '../components/Picture';

const links = {
  utfpr: 'http://www.utfpr.edu.br/',
  positivo: 'https://www.up.edu.br',
  orbital: 'https://orbitaldev.com.br/',
  yousendr: 'http://yousendr.com/',
};

class AboutSection extends React.Component {
  render() {
    return (
      <section className="bkg-light">
        <Container>
          <h2 className="green-title-border">Sobre mim</h2>
          <Row className="mt-4">
            <Col sm={5}>
              <Picture src="coder.jpg" size="70%"/>
              <Picture src="robotica.jpg" size="70%" className="mt-2 ml-4"/>
            </Col>
            <Col sm={7}>
              <h3 className="mb-3">🖥️
                <span className="ml-1">Como tudo começou</span>
              </h3>
              <p className="color-light-gray">
                Tive o meu primeiro contato com desenvolvimento aos 11 anos com
                linguagem C. Hoje, com 23 anos, sou apaixonado por frameworks
                JavaScript e estou buscando me especializar como Desenvolvedor
                Fullstack JavaScript.
              </p>
              <h3 className="mb-3 mt-3">🎓
                <span className="ml-1">Formação</span>
              </h3>
              <p className="color-light-gray">
                Cursei o ensino médio técnico em eletrônica
                na <a href={links.utfpr} className="color-blue" target="_blank">
                  UTFPR
                </a>.
              </p>
              <p className="color-light-gray">
                Hoje sou formado em Análise e Desenvolvimento de Sistemas
                pela <a href={links.positivo} className="color-blue" target="_blank">
                  Universidade Positivo.
                </a>
              </p>
              <h3 className="mb-3 mt-3">💼
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
              <h3 className="mb-3 mt-3">🎨
                <span className="ml-1">O que gosto de fazer</span>
              </h3>
              <p className="color-light-gray">
              Como entusiasta, gosto de estudar temas relacionados a UI/UX design,
              eletrônica, robótica e automação com Arduino.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutSection;
