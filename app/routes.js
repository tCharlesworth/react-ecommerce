import React from 'react';
// React Router
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// Route Components
import MainTemplate from './templates/main.js';
// Route Views
import HomeView     from './views/home.js';
import ProductsView from './views/products.js';

// Route Config
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={MainTemplate}>
            <IndexRoute component={HomeView} />
            <Route path="/products" component={ProductsView} />
        </Route>
    </Router>
);

module.exports = routes;