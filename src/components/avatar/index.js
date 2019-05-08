import React from 'react';
import Img from 'gatsby-image';

const Avatar = ({ image }) => (
    <Img 
        fixed={image} 
        style={{
            borderRadius: '100px',
        }}
    />
);

export default Avatar;