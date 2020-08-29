import React from "react";
import { getRequest } from "../api/FoodApi";

export default class FoodCardRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageCollection: [],
            currentImage: "",
            offScreenImage: "",
        };
    }

    UNSAFE_componentWillMount = () => {
        getRequest(0)
            .then(({ data }) =>
                this.setState({
                    imageCollection: data.hits,
                    currentImage: (
                        <img
                            src={data.hits[0].recipe.image}
                            className="image-overlay"
                        />
                    ),
                })
            )
            .catch((error) => console.log(error));
    };

    UNSAFE_componentWillReceiveProps = () => {
        const { imageCollection } = this.state;
        const { index, direction } = this.props;
        console.log("called");

        this.setState(
            {
                offScreenImage: (
                    <img
                        src={imageCollection[index].recipe.image}
                        className="image-overlay"
                    />
                ),
                currentImage: (
                    <img
                        src={imageCollection[index].recipe.image}
                        className="image-overlay"
                    />
                ),
            },
            () =>
                setTimeout(
                    () =>
                        this.setState({
                            offScreenImage: (
                                <img
                                    src={imageCollection[index].recipe.image}
                                    className={`image-overlay move-${direction}`}
                                />
                            ),
                        }),
                    100
                )
        );
    };

    render = () => {
        const { currentImage, offScreenImage } = this.state;
        return (
            <div>
                {currentImage}
                {offScreenImage}
            </div>
        );
    };
}
