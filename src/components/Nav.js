import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../styles/components/Header.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="d-flex">
          <li>
            <a href="#" className="color-blue mr-2">
              <strong>Sobre mim</strong>
            </a>
          </li>
          <li>
            <a href="#" className="color-blue mr-2">
              <strong>Serviços</strong>
            </a>
          </li>
          <li>
            <a href="#" className="color-blue mr-2">
              <strong>Habilidades</strong>
            </a>
          </li>
          <li>
            <a href="#" className="color-blue mr-2">
              <strong>Portfólio</strong>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;