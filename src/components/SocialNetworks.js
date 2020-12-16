/* eslint-disable max-len */
import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../styles/components/SocialNetworks.scss';
class SocialNetworks extends React.Component {
  render() {
    return (
      <div className="mh-social-networks mt-4" id="social-networks">
        <a href="#" className="mr-2">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="mr-2">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" className="mr-2">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="#" className="mr-2">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    );
  }
}

export default SocialNetworks;
