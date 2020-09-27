import React from "react";
import { Provider } from "react-redux";
import Store from "./components/redux/Store";
import FoodCard from "./components/food_card/FoodCard";
import Menu from "./components/menu/Menu";
import "./components/css/style.css";

const App = () => {
    return (
        <Provider store={Store}>
            <div className="h-100 center-x">
                <div className="menu">
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
