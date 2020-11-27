import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./components/redux/Store";
import FoodCard from "./components/food_card/FoodCard";
import FoodRecipe from "./components/food_recipe/FoodRecipe";
import Menu from "./components/menu/Menu";
import NavBar from "./components/navbar/NavBar";
import ResponsiveSize from "./components/responsive_size/ResponsiveSize";
import "./components/css/style.css";

const App = () => {
    return (
        <Provider store={Store}>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/food-recipe/:url"
                        component={FoodRecipe}
                    />
                    <Route exact path="/">
                        <ResponsiveSize xs sm md>
                            <NavBar />
                        </ResponsiveSize>
                        <ResponsiveSize lg>
                            <Menu />
                        </ResponsiveSize>
                        <div className="ml-20 h-100 center-x center-y">
                            <FoodCard />
                        </div>
                    </Route>
                    <ResponsiveSize xs sm md>
                        <Route exact path="/menu" component={Menu} />
                    </ResponsiveSize>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
