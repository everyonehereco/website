import React from 'react';
import Styles from './pullContent.module.css';

const PullContent = ({ children }) => (
    <div className={Styles.pullContent}>
        { children }
    </div>
);

export default PullContent;