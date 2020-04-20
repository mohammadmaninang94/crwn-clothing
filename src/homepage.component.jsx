import React from 'react';
import './homepage.style.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>Hats</h2>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>Jackets</h2>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>Sneakers</h2>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>Women</h2>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h2 className='title'>Men</h2>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;