import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Settings from '../settings/Settings';
import ResponsiveSize from '../responsive_size/ResponsiveSize';
import './style.css';

const Screen = (props) => {
	const { active, children } = props;
	switch (active) {
		case 0:
			return children[0];
		case 1:
			return children[1];
		default:
			return <div>This screen does not exist</div>;
	}
};

const URL = (label) => label.replaceAll(' ', '-').toLowerCase();

const Matches = (props) => {
	const { recipes } = props;
	return (
		<div className='match-recipes-list'>
			{recipes.map((recipe, key) => (
				<Link
					key={key}
					to={`/food-recipe/${URL(recipe.label)}`}
					className='recipe-btn'
				>
					<div className='match-recipes'>
						<img
							className='avatar'
							src={recipe.image}
							alt={recipe.label}
						/>
						<h3>{recipe.label}</h3>
					</div>
				</Link>
			))}
		</div>
	);
};

const Menu = (props) => {
	const { recipes } = props;
	const [active, setActive] = useState(0);
	return (
		<div className='menu'>
			<div className='menu-logo'>
				<ResponsiveSize xs sm md>
					<Link to='/' className='link-logo'>
						<h1>Foodber</h1>
					</Link>
				</ResponsiveSize>
				<ResponsiveSize lg>
					<h1>Foodber</h1>
				</ResponsiveSize>
			</div>
			<div className='menu-navbar'>
				<button className={`menu-button`} onClick={() => setActive(0)}>
					Matches
				</button>
				<button className={`menu-button`} onClick={() => setActive(1)}>
					Settings
				</button>
			</div>
			<Screen active={active}>
				<Matches recipes={recipes} />
				<Settings />
			</Screen>
		</div>
	);
};

const mapStateToProps = (state) => ({
	recipes: state.recipes.items,
});

export default connect(mapStateToProps)(Menu);
