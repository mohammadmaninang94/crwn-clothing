import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className='background-image'
        ></div>
        <div className='content'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default MenuItem;