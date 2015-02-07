'use strict';
var React         = require('react'),
    Router        = require('react-router'),
    RouteHandler  = Router.RouteHandler;

var App = React.createClass({

    statics: {
        Controller: require('app/controllers')
    },

    render: function () {
        return (
            <div className="detail">
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

module.exports = App;