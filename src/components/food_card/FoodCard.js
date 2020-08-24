import React from "react";
import NavBar from "../nav_bar/NavBar";
import "./style.css";
import sampleImg from "./index.jpg";

export default class FoodCard extends React.Component {
    render = () => {
        return (
            <div className="food-card">
                <NavBar />
                <div className="food-card-content">
                    <img src={sampleImg} alt="a nice cuisine" />
                </div>
            </div>
        );
    };
}
