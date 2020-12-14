import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Picture from '../components/Picture';
import SocialNetworks from '../components/SocialNetworks';
import '../styles/sections/Landing.scss';

class LandingSection extends React.Component {
  render() {
    return (
      <section className="d-flex align-items-center pt-0 pb-0">
        <Container>
          <Row noGutters>
            <Col sm={4}>
              <Picture src="murilo.png" size="80%" />
            </Col>
            <Col sm={7} className="mh-landing-text d-flex flex-column justify-content-end pb-4">
              <h1>Murilo Henrique, prazer ;)</h1>
              <p className="mt-3 mh-landing-subtitle color-blue">
                Desenvolvedor Javascript Fullstack
              </p>
            </Col>
            <Col sm={4}></Col>
            <Col sm={7} className="d-flex justify-content-center">
              <SocialNetworks />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default LandingSection;
