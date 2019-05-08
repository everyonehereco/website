import React from 'react';
import Styles from './whoWeAre.module.css';

import PullContent from '../pullContent/pullContent';
import Avatar from '../avatar';

const WhoWeAre = ({ image }) => (
    <div className={Styles.whoWeAre} id='whoWeAre'>
        <div className={Styles.content}>
            <div className={Styles.avatar}>
                <Avatar image={image} />
            </div>
            <div className={Styles.pullContent}>
                <PullContent>
                    <h3>Who we are</h3>
                    <p>
                        Kirsty started Everyone Here to help businesses break
                        down silos and bring people together from across
                        organisations to collaborate more effectively.
                        She is passionate about empowering teams and groups of
                        people to creatively solve their problems.
                </p>
                    <p>
                        She built her experience at leading B2B SaaS startups,
                        enterprise software companies and innovation consultancies
                        in a variety of roles but facilitation and working with
                        teams was always the red thread and the thing she
                        felt most energised by.
            </p>
                </PullContent>
            </div>
        </div>
    </div>
);

export default WhoWeAre;