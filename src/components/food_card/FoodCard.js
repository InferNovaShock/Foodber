import React from "react";
import NavBar from "../nav_bar/NavBar";
import "./style.css";
import sampleImg from "./index.jpeg";

export default class FoodCard extends React.Component {
    render = () => {
        return (
            <div className="food-card">
                <NavBar />
                <div className="p-h-80 flex-x flex-y">
                    <img src={sampleImg} alt="a nice cuisine" />
                </div>
            </div>
        );
    };
}
