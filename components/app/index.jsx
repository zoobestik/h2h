'use strict';
var React         = require('react'),
    Router        = require('react-router'),
    RouteHandler  = Router.RouteHandler;

var App = React.createClass({
    getDefaultProps: function () {
        return {};
    },

    render: function () {
        return (
            <div className="detail">
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;