import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

const ingredientList = (recipe) => (
    <div>
        {recipe.ingredients.map((ingredient, key) => (
            <div key={key}>
                <div className="mt-1 ingredient-content">
                    <div className="ml-1">
                        <img
                            className="ingredient-img"
                            src={ingredient.image}
                        />
                    </div>
                    <div className="ml-1 mr-1">
                        <h3 className="mt-1">{ingredient.text}</h3>
                        <h4 className="mt-05">
                            {Math.round(ingredient.weight) + "g"}
                        </h4>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const addMessage = (message) => {
    return (
        <div className="mt-1">
            <h6>You</h6>
            <span className="message">{message}</span>
        </div>
    );
};

class FoodRecipe extends React.Component {
    state = {
        recipe: "",
        message: "",
        messages: [],
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

    messageChange = (event) => {
        console.log(event);
        if (event.target.key === "Enter") {
            this.sendMessage();
            event.preventDefault();
            console.log(event.target.key);
        }

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    sendMessage = () => {
        const { message, messages } = this.state;

        if (message.length <= 0) {
            return;
        }

        this.setState({
            messages: [...messages, addMessage(message)],
            message: "",
        });
    };

    deleteRecipe = () => {};

    messageBox = () => {
        const { recipe, messages } = this.state;

        return (
            <div className="p-h-100 message-container">
                <div className="message-box-nav">
                    <h4>{recipe.label}</h4>
                    <button className="send-btn">UNMATCH</button>
                    <Link to="/" className="exit-btn">
                        X
                    </Link>
                </div>
                <div className="message-box">{messages}</div>
                <div className="message-box-input">
                    <textarea
                        name="message"
                        type="text"
                        placeholder={"Type in a message"}
                        className="p-h-10"
                        maxLength="5000"
                        onChange={this.messageChange}
                        value={this.state.message}
                    ></textarea>
                    <button className="send-btn" onClick={this.sendMessage}>
                        SEND
                    </button>
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
                <div className="col ">{this.recipeProfile()}</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
});

export default connect(mapStateToProps)(FoodRecipe);
