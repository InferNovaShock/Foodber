import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div className='menu-logo'>
        <Link to='/' className='link-logo'>
            <h1>Foodber</h1>
        </Link>
    </div>
);

export default NavBar;
