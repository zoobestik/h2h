'use strict';

const React = require('react');
const Router = require('react-router');
const routes = require('components/Routes');
const data = JSON.parse(document.getElementById('store').innerHTML);

const context = {
    getStore: function() {
        return {
            getLeagueTable: function(id) {
                return data.page['league-table-' + id];
            },
        };
    },
};

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler context={ context }/>, document.getElementById('application'));
});
