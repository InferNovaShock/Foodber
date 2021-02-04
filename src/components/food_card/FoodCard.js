import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	addRecipe,
	updateIndex,
	updateRecipeCollection,
} from '../redux/actions/RecipeAction';
import './style.css';

const Dummy = (props) => (
	<button>
		<span icon={props.icon} className='material-icons icons'>
			{props.icon}
		</span>
	</button>
);

const Swipe = (props) => {
	const { direction, icon, swipeDirection, disabled } = props;
	return (
		<button
			name={direction}
			onClick={() => swipeDirection(direction)}
			disabled={disabled}
		>
			<span name={direction} icon={icon} className='material-icons icons'>
				{icon}
			</span>
		</button>
	);
};

const FoodCard = (props) => {
	const { index, recipeCollection } = props;
	const [direction, setDirection] = useState('');

	return (
		<div className='mt-1'>
			<div className='images center-x'>
				<img
					src={recipeCollection[index]}
					className={`image-overlay-1 ${direction}`}
					onTransitionEnd={() => setDirection('')}
				/>
				<img
					src={recipeCollection[index]}
					className='image-overlay-2'
				/>
			</div>
			<div className='mt-1 icons-nav'>
				<Dummy icon='replay' />
				<Swipe
					direction='left'
					icon='close'
					swipeDirection={setDirection}
					disabled={direction ? true : false}
				/>
				<Dummy icon='star' />
				<Swipe
					direction='right'
					icon='favorite'
					swipeDirection={setDirection}
					disabled={direction ? true : false}
				/>
				<Dummy icon='flash_on' />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	index: state.recipes.index,
	recipeCollection: state.recipes.recipeCollection,
	preferences: state.recipes.preferences,
});

export default connect(mapStateToProps, {
	addRecipe,
	updateIndex,
	updateRecipeCollection,
})(FoodCard);
