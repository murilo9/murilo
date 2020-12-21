import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../styles/components/Header.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="d-flex">
          <li>
            <a href="#about" className="color-blue mr-3">
              <strong>Sobre mim</strong>
            </a>
          </li>
          <li>
            <a href="#services" className="color-blue mr-3">
              <strong>Serviços</strong>
            </a>
          </li>
          <li>
            <a href="#skills" className="color-blue mr-3">
              <strong>Habilidades</strong>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="color-blue mr-3">
              <strong>Portfólio</strong>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
