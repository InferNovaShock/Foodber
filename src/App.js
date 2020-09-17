import React from "react";
import { Provider } from "react-redux";
import Store from "./components/redux/Store";
import FoodCard from "./components/food_card/FoodCard";
import Menu from "./components/menu/Menu";
import "./components/css/style.css";

const App = () => {
    return (
        <Provider store={Store}>
            <div className="foodber">
                <div className="recipes-list">
                    <Menu />
                </div>
                <div className="food-card">
                    <FoodCard />
                </div>
            </div>
        </Provider>
    );
};

export default App;
