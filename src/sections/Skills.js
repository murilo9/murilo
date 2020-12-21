/* eslint-disable max-len */
import * as React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../styles/sections/Skills.scss';

const skills = [
  ['html5.svg', 'html5'], ['css3.svg', 'CSS3'], ['javascript.svg', 'Javascript'],
  ['vue.svg', 'Vue.js'], ['react.svg', 'React.js'],
  ['angular.svg', 'Angular'], ['node.svg', 'Node.js'], ['nuxt.svg', 'Nuxt.js'],
  ['typescript.svg', 'Typescript'], ['redux.svg', 'Redux'], ['sass.svg', 'Sass'],
  ['jquery.svg', 'jQuery'],
  ['mongodb.svg', 'MongoDB'], ['mysql.svg', 'MySQL'], ['firebase.svg', 'Firebase'],
  ['heroku.svg', 'Heroku'], ['webpack.svg', 'Webpack'], ['npm.svg', 'NPM Scripts'],
  ['gatsby.svg', 'Gatsby'], ['bootstrap.svg', 'Bootstrap'], ['materialui.svg', 'Material UI'],
];

class SkillsSection extends React.Component {
  render() {
    const skillsList = [];
    skills.forEach((skill) => {
      skillsList.push(
          <div className="mh-skill ml-2 mb-2">
            <img src={skill[0]} alt={skill[1]} title={skill[1]} />
          </div>,
      );
    });
    return (
      <section className="bkg-dark-2" id="skills">
        <Container className="d-flex flex-column align-items-center">
          <h2 className="green-title-border mb-5">Habilidades</h2>
          <div className="mh-skills-container mt-2 mb-5 d-flex flex-wrap justify-content-center">
            { skillsList }
          </div>
          <Row className="w-100 mh-languages" noGutters>
            <Col className="d-flex justify-content-center align-items-center">
              <img src='brasil.svg' className="mh-flag mr-4"/>
              <div>
                <p className="color-blue">Português</p>
                <p className="color-light-gray">Nativo</p>
              </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <img src='english.svg' className="mh-flag mr-4"/>
              <div>
                <p className="color-blue">Inglês</p>
                <p className="color-light-gray">Avançado</p>
              </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <img src='francais.svg' className="mh-flag mr-4"/>
              <div>
                <p className="color-blue">Francês</p>
                <p className="color-light-gray">Básico</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SkillsSection;
