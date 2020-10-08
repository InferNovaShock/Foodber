import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class Menu extends React.Component {
    createMenu = (recipes) => {
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

    render = () => {
        const { recipes } = this.props;
        const recipesMenu = recipes.length > 0 ? this.createMenu(recipes) : "";

        return (
            <div className="menu">
                <div className="menu-logo">
                    <h1>Foodber</h1>
                </div>
                <div className="menu-navbar">
                    <button className="menu-button">Matches</button>
                    <button className="menu-button">Settings</button>
                </div>
                {recipesMenu}
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
});

export default connect(mapStateToProps)(Menu);
