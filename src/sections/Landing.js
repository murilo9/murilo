/* eslint-disable max-len */
import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Picture from '../components/Picture';
import SocialNetworks from '../components/SocialNetworks';
import '../styles/sections/Landing.scss';

const landingTitle = 'Murilo Henrique, prazer ;)';

class LandingSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  showSubtitle() {
    document.getElementById('landing-subtitle').style.color = '#5DEEFF';
    document.getElementById('landing-social-networks').style.borderTop = '2px solid black';
    document.getElementById('social-networks').style.color = '#fff';
  }

  pushLetter(letter, i, length) {
    let title = this.state.title;
    title += letter;
    this.setState({title});
    if (i === length - 1) {
      setTimeout(this.showSubtitle, 250);
    }
  }

  writeTitle(self) {
    const length = landingTitle.length;
    for (let i = 0; i < length; i++) {
      setTimeout(() => self.pushLetter(landingTitle.charAt(i), i, length), i*50);
    }
  }

  componentDidMount() {
    setTimeout(() => this.writeTitle(this), 1000);
  }

  render() {
    return (
      <section className="d-flex align-items-center pt-0 pb-0 mh-landing">
        <Container>
          <Row noGutters>
            <Col sm={4} className="d-flex justify-content-center">
              <Picture src="murilo.png" size="260px" id="landing-img"
                color="green" top="20px" left="-20px" className="mb-2" />
            </Col>
            <Col sm={7} className="mh-landing-text d-flex flex-column justify-content-end pb-4">
              <h1 className="landing-title">{this.state.title}</h1>
              <p className="mt-3 mh-landing-subtitle" id="landing-subtitle">
                Desenvolvedor Javascript Fullstack
              </p>
            </Col>
            <Col sm={4}></Col>
            <Col sm={7} id="landing-social-networks" className="d-flex justify-content-center">
              <SocialNetworks />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default LandingSection;
