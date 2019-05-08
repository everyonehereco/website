import React from 'react';
import Styles from './card.module.css';

const Card = ({ title, content }) => (
    <div className={Styles.card}>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
);

export default Card;