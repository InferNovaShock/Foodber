import React from "react";
import { connect } from "react-redux";
import {
    addRecipe,
    updateIndex,
    updateRecipeCollection,
} from "../redux/actions/RecipeAction";
import { getRequest } from "../api/FoodApi";
import { SET_OFF_ANIMATION_DURATION } from "../Constant";
import "./style.css";

const image = (imageSrc, classes, transitionEnd) => {
    return (
        <img
            src={imageSrc}
            className={classes}
            onTransitionEnd={transitionEnd}
        />
    );
};

class FoodCard extends React.Component {
    state = {
        onScreenImage: "",
        offScreenImage: "",
        finished: true,
    };

    UNSAFE_componentWillMount = () => {
        const { index, updateRecipeCollection, recipeCollection } = this.props;

        if (recipeCollection.length <= 0) {
            getRequest("diet=high-protein", 0)
                .then(({ data }) => {
                    updateRecipeCollection(data.hits);
                    this.setState({
                        onScreenImage: this.getImage(
                            index + 1,
                            "image-overlay"
                        ),
                        offScreenImage: this.getImage(index, "image-overlay"),
                    });
                })
                .catch((error) => console.log(error));
        } else {
            this.setState({
                onScreenImage: this.getImage(index + 1, "image-overlay"),
                offScreenImage: this.getImage(index, "image-overlay"),
            });
        }
    };

    UNSAFE_componentWillReceiveProps = (props) => {
        const {
            preferences,
            updateIndex,
            updateRecipeCollection,
            index,
        } = this.props;
        const newPreferences = props.preferences;

        const preferenceString = Object.values(preferences).join("&");
        const newPreferenceString = Object.values(newPreferences).join("&");
        if (
            newPreferenceString.length > 0 &&
            preferenceString !== newPreferenceString
        ) {
            console.log(newPreferenceString);
            getRequest(`${newPreferenceString}`, 0)
                .then(({ data }) => {
                    updateRecipeCollection(data.hits);
                    updateIndex(0);
                    this.setState({
                        onScreenImage: this.getImage(
                            index + 1,
                            "image-overlay"
                        ),
                        offScreenImage: this.getImage(index, "image-overlay"),
                    });
                })
                .catch((error) => console.log(error));
        }
    };

    transitionEnd = () => {
        this.setState({ finished: true });
    };

    addRecipeToMenu = (index, direction) => {
        if (direction === "right") {
            const { addRecipe, recipeCollection } = this.props;
            addRecipe(recipeCollection[index].recipe);
        }
    };

    getImage = (index, classes) => {
        const { recipeCollection } = this.props;
        const imageToDisplay = recipeCollection[index].recipe.image;
        return image(imageToDisplay, classes, this.transitionEnd);
    };

    updateOffScreenImage = (index, direction, delay) => {
        setTimeout(() => {
            this.setState({
                offScreenImage: this.getImage(
                    index,
                    `image-overlay move-${direction}`
                ),
            });
        }, delay);
    };

    swipe = (index, direction) => {
        this.setState({
            onScreenImage: this.getImage(index + 1, "image-overlay"),
            offScreenImage: this.getImage(index, "image-overlay"),
        });

        this.addRecipeToMenu(index, direction);
        this.updateOffScreenImage(index, direction, SET_OFF_ANIMATION_DURATION);
    };

    nextRecipe = (event) => {
        event.stopPropagation();
        const { finished } = this.state;
        const {
            index,
            preferences,
            updateIndex,
            recipeCollection,
            updateRecipeCollection,
        } = this.props;

        if (finished && index < recipeCollection.length) {
            if (index !== 0 && index % 5 === 0) {
                const preferenceString = Object.values(preferences).join("&");
                const copyRecipeCollection = [...recipeCollection];
                getRequest(preferenceString, index + 6)
                    .then(({ data }) => {
                        updateRecipeCollection([
                            ...copyRecipeCollection.splice(
                                index,
                                copyRecipeCollection.length
                            ),
                            ...data.hits,
                        ]);
                    })
                    .catch((error) => console.log(error));
                updateIndex(0);
            } else {
                this.setState({ finished: false });
                this.swipe(index, event.target.attributes[0].nodeValue);
                updateIndex(index + 1);
            }
        }
    };

    renderFoodCard = () => {
        const { onScreenImage, offScreenImage } = this.state;
        return (
            <div className="mt-1">
                <div className="images">
                    {onScreenImage}
                    {offScreenImage}
                </div>
                <div className="mt-1 icons-nav">
                    <button>
                        <span icon="replay" className="material-icons icons">
                            replay
                        </span>
                    </button>
                    <button name="left" onClick={this.nextRecipe}>
                        <span
                            name="left"
                            icon="close"
                            className="material-icons icons"
                            onClick={this.nextRecipe}
                        >
                            close
                        </span>
                    </button>
                    <button>
                        <span icon="star" className="material-icons icons">
                            star
                        </span>
                    </button>
                    <button name="right" onClick={this.nextRecipe}>
                        <span
                            name="right"
                            icon="favorite"
                            className="material-icons icons"
                            onClick={this.nextRecipe}
                        >
                            favorite
                        </span>
                    </button>
                    <button>
                        <span icon="flash_on" className="material-icons icons">
                            flash_on
                        </span>
                    </button>
                </div>
            </div>
        );
    };

    render = () => {
        return this.renderFoodCard();
    };
}

const mapStateToProps = (state) => ({
    index: state.recipes.index,
    recipeCollection: state.recipes.recipeCollection,
    preferences: state.recipes.preferences,
});

export default connect(mapStateToProps, {
    addRecipe,
    updateIndex,
    updateRecipeCollection,
})(FoodCard);
