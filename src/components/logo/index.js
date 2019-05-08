import React from 'react';
import { Link } from 'gatsby';
import Styles from './logo.module.css';

const Logo = ({ siteTitle }) => (
    <div className={Styles.logo}>
        <h1>
            <Link activeClassName={Styles.link} to='/'>
                {siteTitle}
            </Link>
        </h1>
    </div>
);

export default Logo;