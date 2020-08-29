import React from "react";
import FoodCard from "./components/food_card/FoodCard";
import "./components/css/style.css";

const App = () => {
    return (
        <div>
            <div className="h-100 center-x center-y">
                <FoodCard />
            </div>
        </div>
    );
};

export default App;
