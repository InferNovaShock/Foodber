import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./components/redux/Store";
import FoodCard from "./components/food_card/FoodCard";
import FoodRecipe from "./components/food_recipe/FoodRecipe";
import PageNotFound from "./components/page_not_found/PageNotFound";
import Menu from "./components/menu/Menu";
import "./components/css/style.css";

const App = () => {
    return (
        <Provider store={Store}>
            <Router>
                <div>
                    <div className="menu">
                        <Menu />
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <div className="h-100 center-x">
                                <FoodCard />
                            </div>
                        </Route>
                        <Route exact path="/page-not-found">
                            <PageNotFound />
                        </Route>
                        <Route path="/:url">
                            <FoodRecipe />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
