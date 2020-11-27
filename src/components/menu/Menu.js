import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Settings from "../settings/Settings";
import ResponsiveSize from "../responsive_size/ResponsiveSize";
import "./style.css";

class Menu extends React.Component {
    state = {
        active: true,
    };

    matchesClick = () => {
        this.setState({
            active: true,
        });
    };

    settingsClick = () => {
        this.setState({
            active: false,
        });
    };

    createSettings = () => {
        return <Settings />;
    };

    createMatches = (recipes) => {
        return (
            <div className="match-recipes-list">
                {recipes.map((recipe, key) => (
                    <Link
                        key={key}
                        to={`/food-recipe/${recipe.label
                            .replaceAll(" ", "-")
                            .toLowerCase()}`}
                        className="recipe-btn"
                    >
                        <div className="match-recipes">
                            <img
                                className="avatar"
                                src={recipe.image}
                                alt={recipe.label}
                            />
                            <h3>{recipe.label}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        );
    };

    render = () => {
        const { active } = this.state;
        const { recipes } = this.props;

        const currentScreen = active
            ? this.createMatches(recipes)
            : this.createSettings();
        const activeButton = active ? ["active", ""] : ["", "active"];

        return (
            <div className="menu">
                <div className="menu-logo">
                    <ResponsiveSize xs sm md>
                        <Link to="/" className="link-logo">
                            <h1>Foodber</h1>
                        </Link>
                    </ResponsiveSize>
                    <ResponsiveSize lg>
                        <h1>Foodber</h1>
                    </ResponsiveSize>
                </div>
                <div className="menu-navbar">
                    <button
                        className={`menu-button ${activeButton[0]}`}
                        onClick={this.matchesClick}
                    >
                        Matches
                    </button>
                    <button
                        className={`menu-button ${activeButton[1]}`}
                        onClick={this.settingsClick}
                    >
                        Settings
                    </button>
                </div>
                {currentScreen}
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
});

export default connect(mapStateToProps)(Menu);
