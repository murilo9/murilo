/* eslint-disable max-len */
import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../styles/sections/Services.scss';

class ServicesSection extends React.Component {
  render() {
    return (
      <section id="services">
        <Container>
          <div className="d-flex justify-content-center">
            <h2 className="green-title-border">Serviços</h2>
          </div>
          <Row className="mt-4">
            <Col className="d-flex flex-column align-items-center">
              <object type="image/svg+xml" data="computer.svg"
                className="mh-flat-icon mb-3"></object>

              <h3 className="mb-2">Aplicações Web</h3>
              <p className="color-light-gray">
                Construção de aplicações web modernas com Vue, React ou Angular
                com backend composto de API REST ou de serviços baseados em nuvem
                (Firebase, Heroku).
              </p>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <object type="image/svg+xml" data="worldwide.svg"
                className="mh-flat-icon mb-3"></object>
              <h3 className="mb-2">APIs REST</h3>
              <p className="color-light-gray">
                APIs feitas em Nodejs para prover serviços à sua aplicação de front-end
                utilizando bancos de dados relacionais (MySQL) ou não-relacionais (MongoDB)
                e seus respectivos ORMs (Sequelize, Mongoose).
              </p>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <object type="image/svg+xml" data="online.svg"
                className="mh-flat-icon mb-3"></object>
              <h3 className="mb-2">Landing Pages e Sites</h3>
              <p className="color-light-gray">
                Páginas feitas usando Nuxtjs visando a melhor performance e
                bons resultados em motores de busca (SEO).
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ServicesSection;
