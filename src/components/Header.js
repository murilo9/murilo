import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Nav from './Nav';
import '../styles/components/Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
  render() {
    return (
      <header className="d-flex align-items-center">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <Nav />
            </Col>
            <Col className="d-flex justify-content-end">
              <FontAwesomeIcon icon={faCircle} className="available"/>
              <span className="ml-1">
                Disponível para novos projetos
              </span>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
