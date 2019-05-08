import PropTypes from 'prop-types';
import React from 'react';
import Styles from './header.module.css';
import Logo from '../logo';
import Nav from '../nav';

const Header = ({ siteTitle }) => (
    <header className={Styles.header}>
        <Logo siteTitle={siteTitle} />
        <Nav />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header;
