'use strict';
const React = require('react');
const RouterState = require('react-router').State;
const RouteHandler = require('react-router').RouteHandler;
const Promise = require('bluebird');
const Layout = require('components/layout');

module.exports = React.createClass({
    mixins: [ RouterState ],

    statics: {
        action: function() {
            return Promise.resolve();
        }
    },

    getInitialState: function() {
        return {
            menuItems: this.getMenuData(),
            activeItem: this.getActiveMenuItem()
        }
    },

    getActiveMenuItem: function() {
        return this.getMenuData()[0].to;
    },

    getMenuData: function() {
        return [
            { to: 'explore', text: 'Explore' },
            { to: 'leagueTable', text: 'League Table' },
            { to: 'calendar', text: 'Calendar' },
            { to: 'news', text: 'News' }
        ];
    },

    render: function() {
        return (
            <Layout menu={ this.state.menuItems } menuActiveItem={ this.state.activeItem } >
                <RouteHandler { ...this.props } />
            </Layout>
        );
    }
});
