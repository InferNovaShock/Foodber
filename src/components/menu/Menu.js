import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class Menu extends React.Component {
    state = {
        active: true,
    };

    createSettings = () => {
        return (
            <div className="center-x mt-1">
                <div>
                    <label for="diet">Diet</label>
                    <select name="diet" id="diet">
                        <option value="balanced">Balanced</option>
                        <option value="high-protein">High Protein</option>
                        <option value="high-fiber">High Fiber</option>
                        <option value="low-fat">Low Fat</option>
                        <option value="low-carb">Low Carb</option>
                        <option value="low-sodium">Low Sodium</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" />
                </div>
            </div>
        );
    };

    createMatches = (recipes) => {
        return (
            <div className="match-recipes-list">
                {recipes.map((recipe, key) => (
                    <Link
                        key={key}
                        to={`/${recipe.label
                            .replaceAll(" ", "-")
                            .toLowerCase()}`}
                    >
                        <div className="match-recipes">
                            <img className="avatar" src={recipe.image} />
                            <h3>{recipe.label}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        );
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
                    <h1>Foodber</h1>
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
