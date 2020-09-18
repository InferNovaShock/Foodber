import React from "react";
import { connect } from "react-redux";

const createMenu = (recipes) => (
    <div>
        {recipes.label}
        <div>
            {recipes.ingredientLines.forEach((label) => (
                <div>{label}</div>
            ))}
        </div>
    </div>
);

class Menu extends React.Component {
    render = () => {
        const { recipes } = this.props;
        let recipesMenu;
        if (recipes.length > 0) {
            console.log(recipes);
            recipesMenu = createMenu(recipes[0]);
        }
        return <div className="menu">{recipesMenu}</div>;
    };
}

const mapStateToProps = (state) => ({
    recipes: state.recipes.items,
});

export default connect(mapStateToProps)(Menu);
