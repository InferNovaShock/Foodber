import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeRecipe } from '../redux/actions/RecipeAction';
import './style.css';

const ingredientList = (recipe) => (
	<div>
		{recipe.ingredients.map((ingredient, key) => (
			<div key={key}>
				<div className='mt-1 ingredient-content'>
					<div className='ml-1'>
						<img
							className='ingredient-img'
							src={ingredient.image}
							alt={ingredient.text}
						/>
					</div>
					<div className='ml-1 mr-1'>
						<h3 className='mt-1'>{ingredient.text}</h3>
						<h4 className='mt-05'>
							{Math.round(ingredient.weight) + 'g'}
						</h4>
					</div>
				</div>
			</div>
		))}
	</div>
);

const addMessage = (message) => {
	return (
		<div className='mt-1'>
			<h6>You</h6>
			<span className='message'>{message}</span>
		</div>
	);
};

const FoodRecipe = () => <div>Lorem Ipsum</div>;

const mapStateToProps = (state) => ({
	recipes: state.recipes.items,
});

export default connect(mapStateToProps, { removeRecipe })(FoodRecipe);
