import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
             <p class="footer__copy">
                <NavLink to='' className="footer__copy-link">&#169; Par Astero Design</NavLink>
            </p>
        </footer>
    );
};

export default Footer;