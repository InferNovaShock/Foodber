import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class Menu extends React.Component {
    state = {
        active: true,
        diet: false,
    };

    openDropDown = (event) => {
        const currentDropDownState = this.state[event.target.name];
        this.setState({ [event.target.name]: !currentDropDownState });
    };

    createSettings = () => {
        const { diet } = this.state;
        const dietActive = diet ? "" : "hide";

        return (
            <div className="center-x mt-1">
                <div className="p-w-100">
                    <button
                        name="diet"
                        onClick={this.openDropDown}
                        className="btn drop-down-btn mx-auto"
                    >
                        Diet
                    </button>
                    <div className={`p-w-100 ${dietActive}`}>
                        <div className="center-x">
                            <div className="drop-down-menu">
                                <button name="balanced">Balanced</button>
                                <button name="high-protein">
                                    High Protein
                                </button>
                                <button name="high-fiber">High Fiber</button>
                                <button name="low-fat">Low Fat</button>
                                <button name="low-carb">Low Carb</button>
                                <button name="low-sodium">Low Sodium</button>
                            </div>
                        </div>
                    </div>
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
