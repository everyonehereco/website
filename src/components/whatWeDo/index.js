import React from 'react';
import Styles from './whatWeDo.module.css';

import Card from '../card';

const content = {
    title: 'My Services',
    content: `
        I'm a paragraph. Click here to add your own text and edit me.
        It’s easy. Just click “Edit Text” or double click me to add 
        your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users 
        know a little more about you.
    `
}

const rows = ['', '', '', ''];

const WhatWeDo = () => (
    <div className={Styles.whatWeDo} id='whatWeDo'>
        <div className={Styles.grid}>
            {
                rows.map(function (i) {
                    return <Card title={content.title} content={content.content} />
                })
            }
        </div>
    </div>
);

export default WhatWeDo;