/* eslint-disable max-len */
import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../styles/components/SocialNetworks.scss';

const links ={
  linkedin: 'https://www.linkedin.com/in/murilo-henrique-matias-4a6694153/',
  github: 'https://github.com/murilo9',
  whatsapp: 'https://wa.me/5541998929470',
  email: 'mailto:murilohenriquematias@gmail.com',
};

class SocialNetworks extends React.Component {
  render() {
    return (
      <div className="mh-social-networks mt-4" id="social-networks">
        <a href={links.linkedin} className="mr-3" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={links.github} className="mr-3" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={links.whatsapp} className="mr-3" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href={links.email} className="mr-3" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    );
  }
}

export default SocialNetworks;
