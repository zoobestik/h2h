'use strict';

const React = require('react');
const Promise = require('bluebird');
const RouteHandler = require('react-router').RouteHandler;

class App extends React.Component {

    static action(context) {
        const store = context.getStore('page');

        store
            .set('lang', 'ru')
            .set('title', 'h2h.zoobestik.io');

        return Promise.resolve();
    }

    render() {
        return (
            <RouteHandler { ...this.props } />
        );
    }
}

module.exports = App;
