/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import * as React from 'react';
import {Badge, Carousel} from 'react-bootstrap';
import '../styles/components/PortfolioCard.scss';

/**
 * Props:
 *  - title: String
 *  - description: Array<String>  // Each string is a paragraph
 *  - pictures: Array<String>   // Each string is a URL for img src
 *  - links: {
 *      repo: String,
 *      demo: String
 *    }
 */

class PortfolioCard extends React.Component {
  renderPictures() {
    const pictures = this.props.pictures;
    if (pictures.length) {
      const pictures = [];
      this.props.pictures.forEach((picture) => {
        pictures.push(
            <Carousel.Item key={picture}>
              <img
                className="d-block"
                src={picture}
              />
            </Carousel.Item>,
        );
      });
      return (
        <Carousel>
          { pictures }
        </Carousel>
      );
    } else {
      return <p>Sem fotos para exibir.</p>;
    }
  }

  render() {
    // Set links
    const repoLink = this.props.links.repo ?
      <p>
        <a href={this.props.links.repo} className="color-green" target="_blank">
          Repositório
        </a>
      </p> :
      null;
    const demoLink = this.props.links.demo ?
      <p>
        <a href={this.props.links.demo} className="color-green" target="_blank">
          Demo
        </a>
      </p> :
      null;
    const siteLink = this.props.links.site ?
    <p>
      <a href={this.props.links.site} className="color-green" target="_blank">
        Site
      </a>
    </p> : null;
    // Set techs badges:
    const techs = [];
    this.props.techs.forEach((tech) => {
      techs.push(
          <React.Fragment>
            <Badge variant="info">{tech}</Badge>{' '}
          </React.Fragment>,
      );
    });
    // Render
    return (
      <div className="mh-portfolio-card mt-5">
        <div className="pt-4 pl-4 pr-4 pb-4">
          <h3 className="green-title-border mb-4">{this.props.title}</h3>
          <div>
            {this.props.description}
            <p className="color-light-gray mt-2">
            Tecnologias: {techs}
            </p>
          </div>
          <div className="mt-3">
            { repoLink }
            { demoLink }
            { siteLink }
          </div>
        </div>

        { this.renderPictures() }
      </div>
    );
  }
}

export default PortfolioCard;
