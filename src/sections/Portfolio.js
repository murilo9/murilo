/* eslint-disable max-len */
import * as React from 'react';
import {Container} from 'react-bootstrap';

class PortfolioSection extends React.Component {
  render() {
    return (
      <section>
        <Container>
          <div className="d-flex justify-content-center">
            <h2 className="green-title-border">Portfólio</h2>
          </div>
          <p className="ta-center">Em breve...</p>
        </Container>
      </section>
    );
  }
}

export default PortfolioSection;
