import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<div className='nav-bar menu-logo center-x'>
		<Link to='/menu' className='link-logo'>
			<h1>Foodber</h1>
		</Link>
	</div>
);

export default NavBar;
