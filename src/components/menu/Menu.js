import React, { useState } from 'react';
import Matches from '../matches/Matches';
import Screen from '../screen/Screen';
import Settings from '../settings/Settings';
import './menu.css';

const Menu = () => {
	const [active, setActive] = useState(0);
	return (
		<div id='menu'>
			<div id='menu-logo'>
				<h1>Foodber</h1>
			</div>
			<div id='menu-navbar'>
				<button className='menu-button' onClick={() => setActive(0)}>
					Matches
				</button>
				<button className='menu-button' onClick={() => setActive(1)}>
					Settings
				</button>
			</div>
			<Screen active={active}>
				<Matches />
				<Settings />
			</Screen>
		</div>
	);
};

export default Menu;
