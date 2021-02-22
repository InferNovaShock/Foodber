import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openRecipe } from '../redux/actions/RecipeAction';
import './matches.css';

const URL = (label) => label.replaceAll(' ', '-').toLowerCase();

const Matches = ({ recipes, openRecipe }) => (
    <div id='match-recipes-list'>
        {recipes.map((recipe, key) => (
            <Link
                key={key}
                to={`/food-recipe/${URL(recipe.label)}`}
                className='recipe-btn'
                onClick={() => openRecipe(recipes[key])}
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

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
});

export default connect(mapStateToProps, { openRecipe })(Matches);
