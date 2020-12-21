/* eslint-disable max-len */
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
          <Row noGutters>
            <Col className="d-none d-sm-flex justify-content-start" sm={8}>
              <Nav />
            </Col>
            <Col className="d-flex justify-content-between justify-content-sm-end" sm={4}>
              <div>
                <FontAwesomeIcon icon={faCircle} className="available"/>
                <span className="ml-2">
                Disponível para novos projetos
                </span>
              </div>
              { /* TODO: mobile nav menu */}
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
