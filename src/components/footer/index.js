import React from 'react';
import Styles from './footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className={Styles.footer}>
        <a href='http://twitter.com/everyonehere' className={Styles.brandLink}>
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='' className={Styles.brandLink}>
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <h3>© 2019 by Everyone Here. All rights reserved.</h3>    
    </footer>
);

export default Footer;