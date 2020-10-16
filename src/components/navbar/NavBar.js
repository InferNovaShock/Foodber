import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class NavBar extends React.Component {
    render = () => {
        return (
            <div className="nav-bar menu-logo center-x">
                <Link to="/menu" className="link-logo">
                    <h1>Foodber</h1>
                </Link>
            </div>
        );
    };
}
