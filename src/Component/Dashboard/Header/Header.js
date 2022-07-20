import React from 'react';
import './header.css';

const Header = () => {
    return (
        <>
        <div className='main_header'>
            <div className='head_text'>
                <h2>
                  Good Morning, Alexander
                </h2>
            </div>
            <div className='head_icon'>
                <p>
                  Welcome back, nice to see you again!
                </p>
            </div>
        </div>
        <div className='header_icons'>
            <img className='search_img' src="/images/search 1.png" alt=""/>
            <img className='icon_img' src="/images/icon-notif.png" alt=""/>
            <img className='ellip_img' src="/images/Ellipse 9.png" alt=""/>
        </div>
        </>
    );
};

export default Header;