import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    addRecipe,
    updateIndex,
    updateRecipeCollection,
} from '../redux/actions/RecipeAction';
import './food-card.css';

const Dummy = (icon) => (
    <button>
        <span icon={icon} className='material-icons icons'>
            {icon}
        </span>
    </button>
);

const Swipe = ({
    icon,
    index,
    recipes,
    disabled,
    addRecipe,
    direction,
    updateIndex,
    swipeDirection,
}) => (
    <button
        name={direction}
        onClick={() => {
            if (direction === 'right') {
                addRecipe(recipes[index]);
            }
            updateIndex((index + 1) % recipes.length);
            swipeDirection(direction);
        }}
        disabled={disabled}
    >
        <span name={direction} icon={icon} className='material-icons icons'>
            {icon}
        </span>
    </button>
);

const FoodCard = ({ index, recipes, updateIndex, addRecipe }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('');
    return (
        <div id='food-card'>
            <div id='images-holder'>
                <img
                    src={recipes[current].image}
                    id='front'
                    className={direction}
                    onTransitionEnd={() => {
                        setDirection('');
                        setCurrent(index);
                    }}
                />
                <img src={recipes[index].image} id='back' />
            </div>
            <div className='icons-nav'>
                <Dummy icon='replay' />
                <Swipe
                    icon='close'
                    index={index}
                    direction='left'
                    recipes={recipes}
                    addRecipe={addRecipe}
                    updateIndex={updateIndex}
                    swipeDirection={setDirection}
                    disabled={direction ? true : false}
                />
                <Dummy icon='star' />
                <Swipe
                    icon='favorite'
                    index={index}
                    direction='right'
                    recipes={recipes}
                    addRecipe={addRecipe}
                    updateIndex={updateIndex}
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
    recipes: state.recipes.recipes,
    preferences: state.recipes.preferences,
});

export default connect(mapStateToProps, {
    addRecipe,
    updateIndex,
    updateRecipeCollection,
})(FoodCard);
