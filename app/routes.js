import React from 'react';
// React Router
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// Route Components
import MainTemplate from './templates/main.js';
// Route Views
import HomeView     from './views/home.js';
import ProductView  from './views/product.js';
import ProductsView from './views/products.js';
import LoginView    from './views/login.js';
import RegisterView from './views/register.js';
import AdminView    from './views/admin.js';

// Route Config
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={MainTemplate}>
            <IndexRoute component={HomeView} />
            <Route path="/products" component={ProductsView} />
            <Route path="/products/:productId" component={ProductView} />
            <Route path="/login"    component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/admin" component={AdminView} />
        </Route>
    </Router>
);

module.exports = routes;