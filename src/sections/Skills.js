import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../styles/sections/Skills.scss';

// flag svgs by Freepik

class SkillsSection extends React.Component {
  render() {
    return (
      <section className="bkg-dark-2">
        <Container className="d-flex flex-column align-items-center">
          <h2 className="green-title-border mb-0">Habilidades</h2>
          <div className="mt-3 d-flex flex-column align-items-center">
            <h3 className="mt-3 color-green">Principais</h3>
            <p className="mt-2 mh-skills-major">
            HTML | CSS | Javascript | Vue | React
            </p>
            <h3 className="mt-3 color-green">Secundárias</h3>
            <p className="mt-2 mh-skills-minor">
            Angular | Node | Nuxt | Typescript
            </p>
            <h3 className="mt-3 color-green">Outras</h3>
            <p className="mt-2 mh-skills-misc">
            Vuex | Redux | MongoDB | MySQL | Mongoose | Firebase | Webpack
            </p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h3 className="mt-3 color-green">Idiomas</h3>
            <Row className="mt-3">
              <Col>
                <Row>
                  <Col>
                    <img src='english.svg' className="mh-flag"/>
                  </Col>
                  <Col>
                    <p className="color-blue">Inglês</p>
                    <p className="color-light-gray">Avançado</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <img src='francais.svg' className="mh-flag"/>
                  </Col>
                  <Col>
                    <p className="color-blue">Francês</p>
                    <p className="color-light-gray">Básico</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}

export default SkillsSection;
