import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/redux/Store';
import FoodCard from './components/food_card/FoodCard';
import FoodRecipe from './components/food_recipe/FoodRecipe';
import Menu from './components/menu/Menu';
import NavBar from './components/navbar/NavBar';
import ResponsiveSize from './components/responsive_size/ResponsiveSize';
import './components/css/style.css';

const App = () => (
    <Provider store={Store}>
        <Router>
            <Switch>
                <Route exact path='/food-recipe/:url' component={FoodRecipe} />
                <Route exact path='/'>
                    <Menu />
                    <ResponsiveSize lg>
                        <FoodCard />
                    </ResponsiveSize>
                </Route>
                <ResponsiveSize xs sm md>
                    <NavBar />
                    <Route exact path='/food-card' component={FoodCard} />
                </ResponsiveSize>
            </Switch>
        </Router>
    </Provider>
);

export default App;
