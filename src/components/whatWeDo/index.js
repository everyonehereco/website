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

const rows = [{
    title: 'Facilitation',
    content: `It’s hard to juggle facilitating an important 
        workshop while remaining impartial.
        When you want your people to be involved 
        and engaged Everyone Here can help.`,
}, {
    title: 'Team Building',
    content: `Using LEGO® Serious Play® amongst other
        tools we will help your team start to unlock
        these traits.`
}, {
    title: 'Design Sprints',
    content: `Design Sprints are the fastest way to find out if a
        product is worth developing or if a new feature is
        worth the effort. Don’t invest months of time,
        invest a week!`
}, {
    title: 'Training',
    content: `We can help training your organisation in 
        Design Thinking for Employee Experience & Onboarding, Customer Journey Mapping,
        Service Blueprinting and User Story Mapping`
}];

const WhatWeDo = () => (
    <div className={Styles.whatWeDo} id='whatWeDo'>
        <div className={Styles.grid}>
            {
                rows.map(i => {
                    return <Card title={i.title} content={i.content} />
                })
            }
        </div>
    </div>
);

export default WhatWeDo;