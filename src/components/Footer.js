/* eslint-disable max-len */
import * as React from 'react';
import {Col, Row} from 'react-bootstrap';
import '../styles/components/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bkg-dark-2">
        <Row className="justify-content-between pl-3 pt-2 pt-md-3 pb-2 pt-md-3 pr-3">
          <Col sm={12} md={6} className="d-flex justify-content-center justify-content-md-start">
            <span>
            Flat icons by <a href='https://www.flaticon.com/authors/phatplus'>phatplus</a>, <a href="https://www.flaticon.com/br/autores/freepik">Freepik</a> and <a href="https://github.com/devicons/devicon">devicon</a>
            </span>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center justify-content-md-end mt-1 mt-md-0">
            <span>
            Copyright 2020 - Murilo Henrique
            </span>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
