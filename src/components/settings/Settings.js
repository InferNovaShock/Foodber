import React from "react";
import { connect } from "react-redux";
import { updatePreferences } from "../redux/actions/RecipeAction";
import { HEALTH, DIET } from "../Constant";

const createButtonsForDropDown = (buttonNavigation, buttonListener) => {
    return (
        <div className="drop-down-menu">
            {buttonNavigation.map((buttonName, index) => (
                <button key={index} name={buttonName} onClick={buttonListener}>
                    {buttonName.substring(buttonName.indexOf("=") + 1)}
                </button>
            ))}
        </div>
    );
};

class Settings extends React.Component {
    state = {
        meal: false,
        dish: false,
        cuisine: false,
    };

    openDropDown = (event) => {
        const currentDropDownState = this.state[event.target.name];
        this.setState({ [event.target.name]: !currentDropDownState });
    };

    updatePreferences = (event) => {
        const { preferences, updatePreferences } = this.props;

        if (preferences[event.target.name]) {
            updatePreferences({ [event.target.name]: "" });
        } else {
            updatePreferences({ [event.target.name]: event.target.name });
        }
    };

    render = () => {
        const { meal, dish, cuisine } = this.state;
        const mealActive = meal ? "" : "hide";
        const dishActive = dish ? "" : "hide";
        const cuisineActive = cuisine ? "" : "hide";

        return (
            <div>
                <div className="mt-1">
                    <button
                        name="meal"
                        onClick={this.openDropDown}
                        className="btn drop-down-btn mx-auto"
                    >
                        Health
                    </button>
                    <div className={`${mealActive}`}>
                        {createButtonsForDropDown(
                            HEALTH,
                            this.updatePreferences
                        )}
                    </div>
                </div>

                <div className="mt-1">
                    <button
                        name="dish"
                        onClick={this.openDropDown}
                        className="btn drop-down-btn mx-auto"
                    >
                        Diet
                    </button>
                    <div className={`${dishActive}`}>
                        {createButtonsForDropDown(DIET, this.updatePreferences)}
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    preferences: state.recipes.preferences,
});

export default connect(mapStateToProps, { updatePreferences })(Settings);
