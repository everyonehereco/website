import React from 'react';
import Styles from './home.module.css';
import image from '../../images/Collaboration.webp';

const Home = () => (
    <div id='home' className={Styles.home}>
        <h1>
            Helping teams collaborate effectively to solve complex
            problems | Realise your best ideas with workshops
            from Everyone Here
        </h1>
        <img className={Styles.drawing} src={image} align='right' />
    </div>
);

export default Home;