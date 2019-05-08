import React from 'react';
import Styles from './nav.module.css';

const Nav = () => (
    <nav>
        <ul className={Styles.nav}>
            <li>
                <a href='#whatWeDo'>What we do</a>
            </li>
            <li>
                <a href='#whoWeAre'>Who we are</a>
            </li>
            <li>
                <a href='#letsTalk'>Lets talk</a>
            </li>
        </ul>
    </nav>
);

export default Nav;