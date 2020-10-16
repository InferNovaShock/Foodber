import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./components/redux/Store";
import FoodCard from "./components/food_card/FoodCard";
import FoodRecipe from "./components/food_recipe/FoodRecipe";
import PageNotFound from "./components/page_not_found/PageNotFound";
import Menu from "./components/menu/Menu";
import NavBar from "./components/navbar/NavBar";
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
                            <NavBar />
                            <div className="h-100 center-x center-y">
                                <FoodCard />
                            </div>
                        </Route>
                        <Route
                            exact
                            path="/page-not-found"
                            component={PageNotFound}
                        />
                        <Route path="/:url" component={FoodRecipe} />
                        <Route exact path="/menu" component={Menu} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
