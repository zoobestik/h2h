'use strict';
var React = require('react'),
    Promise = require('bluebird'),
    RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({

    statics: {
        action: function(context) {
            let store = context.getStore('page');

            store
                .set('lang', 'ru')
                .set('title', 'h2h.zoobestik.io');

            return Promise.resolve();
        }
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