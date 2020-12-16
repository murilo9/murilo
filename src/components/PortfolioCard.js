/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import * as React from 'react';
import {Carousel} from 'react-bootstrap';
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
    </p> :
  null;
    // Render
    return (
      <div className="mh-portfolio-card mt-6">
        <div className="pt-3 pl-3 pr-3 pb-3">
          <h3 className="green-title-border">{this.props.title}</h3>
          <div className="mt-2">
            {this.props.description}
            <p className="color-light-gray mt-2">
            Tecnologias: {this.props.techs}
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
