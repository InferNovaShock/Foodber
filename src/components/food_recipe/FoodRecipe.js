import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './food-recipe.css';

const RecipeNav = () => (
    <div id='message-box-nav'>
        <Link to='/' className='recipe-btn'>
            <span className='material-icons'>close</span>
        </Link>
    </div>
);

const Ingredients = ({ ingredients }) => (
    <ul>
        {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
        ))}
    </ul>
);

const Method = ({ method }) => (
    <ul>
        <li>
            <h2>Method</h2>
        </li>
        {method.map((step, index) => (
            <li>
                <h4>Step {index + 1}</h4>
                <p>{step}</p>
            </li>
        ))}
    </ul>
);

const Recipe = ({ recipe: { image, label, ingredients, method } }) => (
    <div>
        <img id='showcase' src={image} alt={label} />
        <h1 id='title'>{label}</h1>
        <Ingredients ingredients={ingredients} />
        <Method method={method} />
    </div>
);

const FoodRecipe = ({ recipe }) => (
    <div id='food-recipe'>
        <RecipeNav />
        <Recipe recipe={recipe} />
    </div>
);

const mapStateToProps = (state) => ({
    recipe: state.recipes.item,
});

export default connect(mapStateToProps, null)(FoodRecipe);
