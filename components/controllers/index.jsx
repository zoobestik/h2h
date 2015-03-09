'use strict';

var React = require('react'),
    RouterState = require('react-router').State,
    LeagueTable = require('components/leagueTable'),
    Switcher = require('components/switcher'),
    SocialPane = require('components/socialPane'),
    IndexPage;

IndexPage = React.createClass({
    mixins: [ RouterState ],

    statics: {
        action: function(context) {
            var store = context.getStore('page');

            store.set('title', 'Explore – ' + store.get('title'));

            return store.loadLeagueTable(IndexPage.getLeagueId());
        },

        getLeagueId: function() {
            return 0;
        }
    },

    getInitialState: function() {
        var routes = this.getRoutes(),
            store = this.props.context.getStore('page');

        return {
            tabs: this.getTabsData(),
            activeTab: routes[routes.length - 1].name,
            leagueTable: store.getLeagueTable(IndexPage.getLeagueId())
        };
    },

    getTabsData: function() {
        return [
            {
                to: 'explore',
                caption: 'Match Day'
            },
            {
                to: 'explore-scores',
                caption: 'Scores'
            }
        ];
    },

    render: function() {
        return (
            <div className="index-page">
                <div className="index-page__tables">
                    <LeagueTable mix="index-page__league-table" data={ this.state.leagueTable } />
                    <Switcher mix="index-page__switcher" tabs={ this.state.tabs } activeTab={ this.state.activeTab }>

                    </Switcher>
                </div>
                <SocialPane mix="index-page__social" />
            </div>
        );
    }
});

module.exports = IndexPage;
