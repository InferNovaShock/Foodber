import React from "react";
import { Redirect, Link } from "react-router-dom";
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
    state = {
        recipe: "",
    };

    UNSAFE_componentWillMount = () => {
        const { recipes } = this.props;

        if (recipes.length <= 0) {
            return <Redirect to="/page-not-found" />;
        }

        const index = this.findRecipeIndex(
            window.location.pathname.substring(1)
        );
        console.log(recipes[index]);
        this.setState({ recipe: recipes[index] });
    };

    deleteRecipe = () => {};

    messageBox = () => {
        const { recipe } = this.state;

        return (
            <div className="p-h-100 message-container">
                <div className="message-box-nav">
                    <h4>{recipe.label}</h4>
                    <button className="send-btn">UNMATCH</button>
                    <Link to="/" className="exit-btn">
                        X
                    </Link>
                </div>
                <div className="message-box">
                    This is where messages are shown
                </div>
                <div className="message-box-input">
                    <textarea
                        type="text"
                        placeholder={"\n Type in a message"}
                        className="p-h-10"
                        maxLength="5000"
                    ></textarea>
                    <button className="send-btn">SEND</button>
                </div>
            </div>
        );
    };

    recipeProfile = () => {
        const { recipe } = this.state;

        return (
            <div className="p-h-100">
                <div className="food-recipe-container">
                    <div className="food-recipe-name">
                        <img
                            src={recipe.image}
                            alt={recipe.label}
                            className="food-recipe-img"
                        />
                        <h2 className="mt-1">{recipe.label}</h2>
                        <h3 className="mt-1">{recipe.label}</h3>
                    </div>
                    {ingredientList(recipe)}
                </div>
            </div>
        );
    };

    findRecipeIndex = (recipeName) => {
        const { recipes } = this.props;
        const recipeIndex = recipes.findIndex((recipe) => {
            return (
                recipe.label.replaceAll(" ", "-").toLowerCase() === recipeName
            );
        });

        return recipeIndex;
    };

    render = () => {
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
