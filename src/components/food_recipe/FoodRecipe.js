import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

const ingredientList = (recipe) => (
    <div>
        {recipe.ingredients.map((ingredient, key) => (
            <div key={key}>
                <div className="mt-1">
                    <div className="">
                        <img
                            className="ingredient-img"
                            src={ingredient.image}
                        />
                    </div>
                    <div className="">
                        <h3>{ingredient.text}</h3>
                        <h3>{ingredient.weight}</h3>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

class FoodRecipe extends React.Component {
    messageBox = () => {
        return <div className="p-h-100">This is the message box</div>;
    };

    recipeProfile = () => {
        const { recipes } = this.props;
        const index = this.findRecipeIndex(
            window.location.pathname.substring(1)
        );

        return (
            <div className="p-h-100">
                <div className="food-recipe-container">
                    <div className="food-recipe-name">
                        <img
                            src={recipes[index].image}
                            className="food-recipe-img"
                        />
                        <h2 className="mt-1">{recipes[index].label}</h2>
                        <h3 className="mt-1">{recipes[index].label}</h3>
                    </div>
                    {ingredientList(recipes[index])}
                </div>
            </div>
        );
    };

    findRecipeIndex = (recipeName) => {
        console.log(recipeName);
        const { recipes } = this.props;
        const recipeIndex = recipes.findIndex((recipe) => {
            return (
                recipe.label.replaceAll(" ", "-").toLowerCase() === recipeName
            );
        });

        return recipeIndex;
    };

    render = () => {
        const { recipes } = this.props;

        if (recipes.length <= 0) {
            return <Redirect to="/page-not-found" />;
        }

        return (
            <div className="h-100 row">
                <div className="col-2">{this.messageBox()}</div>
                <div className="col">{this.recipeProfile()}</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
});

export default connect(mapStateToProps)(FoodRecipe);
