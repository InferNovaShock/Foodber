import React from 'react';
import { Link } from 'react-router-dom';
import Matches from '../matches/Matches';
import ResponsiveSize from '../responsive_size/ResponsiveSize';
import './menu.css';

const Menu = () => (
    <div id='menu'>
        <div className='menu-logo'>
            <ResponsiveSize lg>
                <h1>Foodber</h1>
            </ResponsiveSize>
            <ResponsiveSize xs sm md>
                <Link to='/food-card' className='link-logo'>
                    <h1>Foodber</h1>
                </Link>
            </ResponsiveSize>
        </div>
        <Matches />
    </div>
);

export default Menu;
