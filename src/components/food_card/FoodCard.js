import React from "react";
import NavBar from "../nav_bar/NavBar";
import { getRequest } from "../api/FoodApi";
import { SET_OFF_ANIMATION_DURATION } from "../Constant";
import "./style.css";

export default class FoodCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            nextRecipePage: 0,
            recipeCollection: "",
            onScreenImage: "",
            offScreenImage: "",
        };
    }

    UNSAFE_componentWillMount = () => {
        getRequest(0)
            .then(({ data }) =>
                this.setState({
                    recipeCollection: data.hits,
                    onScreenImage: (
                        <img
                            src={data.hits[0].recipe.image}
                            className="image-overlay"
                        />
                    ),
                })
            )
            .catch((error) => console.log(error));
    };

    updateOffScreenImage = (index, direction, duration) => {
        const { recipeCollection } = this.state;

        setTimeout(() => {
            this.setState({
                offScreenImage: (
                    <img
                        src={recipeCollection[index].recipe.image}
                        className={`image-overlay move-${direction}`}
                    />
                ),
            });
        }, duration);
    };

    swipe = (index, direction) => {
        const { recipeCollection } = this.state;

        this.setState(
            {
                onScreenImage: (
                    <img
                        src={recipeCollection[index + 1].recipe.image}
                        className="image-overlay"
                    />
                ),
                offScreenImage: (
                    <img
                        src={recipeCollection[index].recipe.image}
                        className="image-overlay"
                    />
                ),
            },
            this.updateOffScreenImage(
                index,
                direction,
                SET_OFF_ANIMATION_DURATION
            )
        );
    };

    nextRecipe = (event) => {
        const { index } = this.state;
        this.swipe(index, event.target.name);
        this.setState({ index: index + 1 });
    };

    render = () => {
        const { onScreenImage, offScreenImage } = this.state;
        return (
            <div className="food-card">
                <div className="center-y">
                    <NavBar />
                </div>
                <div className="food-card-content p-h-80">
                    <div className="overlay-container p-h-80 center-x center-y">
                        {onScreenImage}
                        {offScreenImage}
                        <div className="space-between image-overlay">
                            <button
                                name="left"
                                onClick={this.nextRecipe}
                                className="btn-primary"
                            ></button>
                            <button
                                name="right"
                                onClick={this.nextRecipe}
                                className="btn-danger"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
