'use strict';

var React = require('react'),
    Promise = require('bluebird'),
    RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({

    statics: {
        action: function(context) {
            var store = context.getStore('page');

            store
                .set('lang', 'ru')
                .set('title', 'h2h.zoobestik.io');

            return Promise.resolve();
        }
    },

    render: function () {
        return (
            <RouteHandler {...this.props} />
        );
    }
});

module.exports = App;