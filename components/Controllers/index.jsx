'use strict';

const React = require('react');
const b = require('bem-cn')('index-page');
const RouterState = require('react-router').State;
const LeagueTable = require('components/LeagueTable');
const Switcher = require('components/Switcher');
const SocialPane = require('components/SocialPane');
const leagueId = 0;

module.exports = React.createClass({

    mixins: [ RouterState ],

    statics: {
        action: function(context) {
            const store = context.getStore('page');

            store.set('title', 'Explore – ' + store.get('title'));

            return store.loadLeagueTable(leagueId);
        },
    },

    getInitialState: function() {
        const store = this.props.context.getStore('page');

        return {
            tabs: this.getTabsData(),
            activeTab: this.getActiveTab(),
            leagueTable: store.getLeagueTable(leagueId),
        };
    },

    componentWillReceiveProps: function() {
        this.setState({
            activeTab: this.getActiveTab(),
        });
    },

    getActiveTab: function() {
        const routes = this.getRoutes();

        return routes[routes.length - 1].name;
    },

    getTabsData: function() {
        return [
            {
                to: 'explore',
                caption: 'Match Day',
            },
            {
                to: 'explore-scores',
                caption: 'Scores',
            },
        ];
    },

    render: function() {
        return (
            <div className={ b }>
                <div className={ b('tables') }>
                    <LeagueTable data={ this.state.leagueTable } mix={ b('league-table') } />
                    <Switcher activeTab={ this.state.activeTab } mix={ b('switcher') } tabs={ this.state.tabs }>

                    </Switcher>
                </div>
                <SocialPane mix={ b('social') } />
            </div>
        );
    },
});
