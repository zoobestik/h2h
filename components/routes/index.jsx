'use strict';
var React = require('react'),
    Router = require('react-router'),

/* Router components */
    Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute  = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,

/* Components */
    App = require('components/app'),
    LayoutWrapper = require('components/layout/wrapper'),
    Index = require('components/controllers/index'),
    NotFound = require('components/controllers/404'),
    Routes;

Routes = [
    <Route name="app" path="/" handler={App}>
        <Route handler={LayoutWrapper}>
            <Route name="explore" path="explore/" handler={Index}>
                <Route name="explore-scores" path="scores/" />
            </Route>
            <Redirect to="explore" />
        </Route>
    </Route>,
    <NotFoundRoute name="not-found" handler={ NotFound }/>
];

module.exports = Routes;