'use strict';
var React = require('react'),
    b = require('bem-cn')('index-page'),
    RouterState = require('react-router').State,
    LeagueTable = require('components/leagueTable'),
    Switcher = require('components/switcher'),
    SocialPane = require('components/socialPane'),
    leagueId = 0;

module.exports = React.createClass({
    mixins: [ RouterState ],

    statics: {
        action: function(context) {
            var store = context.getStore('page');

            store.set('title', 'Explore – ' + store.get('title'));

            return store.loadLeagueTable(leagueId);
        }
    },

    getInitialState: function() {
        var routes = this.getRoutes(),
            store = this.props.context.getStore('page');

        return {
            tabs: this.getTabsData(),
            activeTab: routes[routes.length - 1].name,
            leagueTable: store.getLeagueTable(leagueId)
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
            <div className={ b }>
                <div className={ b('tables') }>
                    <LeagueTable mix={ b('league-table') } data={ this.state.leagueTable } />
                    <Switcher mix={ b('switcher') } tabs={ this.state.tabs } activeTab={ this.state.activeTab }>

                    </Switcher>
                </div>
                <SocialPane mix={ b('social') } />
            </div>
        );
    }
});
