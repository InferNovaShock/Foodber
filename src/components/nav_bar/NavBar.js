import React from "react";
import "./style.css";

export default class NavBar extends React.Component {
    render = () => {
        return (
            <div className="nav-bar flex-y">
                <span className="h3">foodber</span>
                <span className="shopping-cart material-icons" role="button">
                    shopping_cart
                </span>
            </div>
        );
    };
}
