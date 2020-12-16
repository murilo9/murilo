import * as React from 'react';
import {Col, Row} from 'react-bootstrap';
import '../styles/components/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="d-flex justify-content-between align-items-center bkg-dark-2 pl-2 pr-2">
        <span>
            Copyright 2020 - Murilo Henrique
        </span>
        <span>
            Flat icons by <a href='https://www.flaticon.com/authors/phatplus'>phatplus</a>, <a href="https://www.flaticon.com/br/autores/freepik">Freepik</a> and <a href="https://github.com/devicons/devicon">devicon</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
