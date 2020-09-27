import React from "react";
import { connect } from "react-redux";
import "./style.css";

const createMenu = (recipes) => (
    <div className="scroll">
        {recipes.map((recipe, key) => (
            <div key={key} className="match-recipes">
                <img className="avatar" src={recipe.image} />
                <h3>{recipe.label}</h3>
            </div>
        ))}
    </div>
);

class Menu extends React.Component {
    render = () => {
        const { recipes } = this.props;
        let recipesMenu;
        if (recipes.length > 0) {
            console.log(recipes);
            recipesMenu = createMenu(recipes);
        }
        return (
            <div className="menu">
                <div className="menu-navbar">
                    <h1>Foodber</h1>
                </div>
                <div>
                    <button>Matched Food</button>
                    <button>Favorites</button>
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
