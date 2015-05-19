'use strict';
const React = require('react');
const Router = require('react-router');

/* Router components */
const Route = Router.Route;
const Redirect = Router.Redirect;
const NotFoundRoute = Router.NotFoundRoute;

/* Components */
const App = require('components/App');
const LayoutWrapper = require('components/Layout/wrapper');
const Index = require('components/controllers/Index');
const NotFound = require('components/controllers/404');

module.exports = [
    <Route name="app" path="/" handler={ App }>
        <Route handler={ LayoutWrapper }>
            <Route name="explore" path="explore/" handler={ Index }>
                <Route name="explore-scores" path="scores/" />
            </Route>
            <Redirect to="explore" />
        </Route>
    </Route>,
    <NotFoundRoute name="not-found" handler={ NotFound }/>
];
