'use strict';
var React         = require('react'),
    Router        = require('react-router'),

/* Router components */
    Route         = Router.Route,
    DefaultRoute  = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,

/* Components */
    App      = require('components/app'),
    Index    = require('components/controllers/index'),
    NotFound = require('components/controllers/404'),
    Routes;

Routes = [
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Index} />
    </Route>,
    <NotFoundRoute name="not-found" handler={ NotFound }/>
];

module.exports = Routes;