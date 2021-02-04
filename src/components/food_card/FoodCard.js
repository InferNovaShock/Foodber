import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	addRecipe,
	updateIndex,
	updateRecipeCollection,
} from '../redux/actions/RecipeAction';
import './food-card.css';

const Dummy = (props) => (
	<button>
		<span icon={props.icon} className='material-icons icons'>
			{props.icon}
		</span>
	</button>
);

const Swipe = (props) => {
	const {
		icon,
		index,
		disabled,
		addRecipe,
		direction,
		updateIndex,
		swipeDirection,
		recipeCollection,
	} = props;
	return (
		<button
			name={direction}
			onClick={() => {
				if (direction === 'right') {
					addRecipe(recipeCollection[index]);
				}
				updateIndex((index + 1) % 5);
				swipeDirection(direction);
			}}
			disabled={disabled}
		>
			<span name={direction} icon={icon} className='material-icons icons'>
				{icon}
			</span>
		</button>
	);
};

const FoodCard = (props) => {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState('');
	const { index, recipeCollection, updateIndex, addRecipe } = props;
	return (
		<div id='food-card'>
			<div id='images-holder'>
				<img
					src={recipeCollection[current].image}
					id='front'
					className={direction}
					onTransitionEnd={() => {
						setDirection('');
						setCurrent(index);
					}}
				/>
				<img src={recipeCollection[index].image} id='back' />
			</div>
			<div className='icons-nav'>
				<Dummy icon='replay' />
				<Swipe
					icon='close'
					index={index}
					direction='left'
					addRecipe={addRecipe}
					updateIndex={updateIndex}
					swipeDirection={setDirection}
					recipeCollection={recipeCollection}
					disabled={direction ? true : false}
				/>
				<Dummy icon='star' />
				<Swipe
					icon='favorite'
					index={index}
					direction='right'
					addRecipe={addRecipe}
					updateIndex={updateIndex}
					swipeDirection={setDirection}
					recipeCollection={recipeCollection}
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
