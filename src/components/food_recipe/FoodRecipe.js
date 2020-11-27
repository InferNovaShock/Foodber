import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeRecipe } from "../redux/actions/RecipeAction";
import ResponsiveSize from "../responsive_size/ResponsiveSize";
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
                            alt={ingredient.text}
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
        index: -1,
    };

    UNSAFE_componentWillMount = () => {
        const { recipes, history, location } = this.props;
        console.log(recipes);

        if (recipes.length <= 0) {
            history.push("/");
        }

        const index = this.findRecipeIndex(location.pathname.substring(1));
        this.setState({ recipe: recipes[index], index: index });
    };

    UNSAFE_componentWillReceiveProps = (props) => {
        const { recipes, location } = this.props;

        if (props.location.pathname !== location.pathname) {
            const index = this.findRecipeIndex(
                props.location.pathname.substring(1)
            );
            this.setState({ recipe: recipes[index], index: index });
        }
    };

    messageChange = (event) => {
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

    keyClick = (event) => {
        if (event.key === "Enter") {
            this.sendMessage();
            event.preventDefault();
        }
    };

    unmatchRecipe = () => {
        const { removeRecipe, history } = this.props;
        const { index } = this.state;
        removeRecipe(index);
        history.push("/");
    };

    messageBox = () => {
        const { history } = this.props;
        const { recipe, messages } = this.state;

        if (typeof recipe === "undefined") {
            history.push("/");
        }

        return (
            <div className="p-h-100 message-container">
                <div className="message-box-nav">
                    <h4>{recipe.label}</h4>
                    <button className="send-btn" onClick={this.unmatchRecipe}>
                        UNMATCH
                    </button>
                    <Link to="/" className="recipe-btn">
                        <span className="material-icons">close</span>
                    </Link>
                </div>
                <ResponsiveSize lg>
                    <div className="message-box">{messages}</div>
                    <div className="message-box-input">
                        <textarea
                            name="message"
                            type="text"
                            placeholder={"Type in a message"}
                            className="p-h-10"
                            maxLength="5000"
                            onChange={this.messageChange}
                            onKeyDown={this.keyClick}
                            value={this.state.message}
                        ></textarea>
                        <button className="send-btn" onClick={this.sendMessage}>
                            SEND
                        </button>
                    </div>
                </ResponsiveSize>
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
        const { recipes, history } = this.props;
        const recipeIndex = recipes.findIndex((recipe) => {
            return (
                recipe.label.replaceAll(" ", "-").toLowerCase() === recipeName
            );
        });

        if (recipeIndex < 0) {
            history.push("/");
        }

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

export default connect(mapStateToProps, { removeRecipe })(FoodRecipe);
