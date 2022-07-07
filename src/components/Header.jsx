import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='header' id='header'>
            <nav className="nav container">
                <NavLink to="/" className='nav__logo' >
                    <img src="./img/logo.png" alt="header-img" />
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;