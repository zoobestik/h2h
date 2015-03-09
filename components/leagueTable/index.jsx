'use strict';

var React = require('react'),
    LeagueTable;

LeagueTable = React.createClass({

    getInitialState: function() {
        return {
            table: this.props.data || []
        }
    },

    getTableView: function() {
        return this.state.table.map(function(item, i) {
            return (
                <tr className="league-table__line" key={ item.user.id }>
                    <td className="league-table__cell league-table__pos">{ i+1 }</td>
                    <td className="league-table__cell league-table__username">{ item.user.name }</td>
                    <td className="league-table__cell league-table__points">{ item.pts }</td>
                </tr>
            );
        });
    },

    render: function() {
        var classes = [ 'league-table' ].concat(this.props.mix);

        return (
            <table className={ classes.join(' ') }>
                <thead>
                    <tr>
                        <th className="league-table__head-cell">Pos</th>
                        <th className="league-table__head-cell">Team</th>
                        <th className="league-table__head-cell">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    { this.getTableView() }
                </tbody>
            </table>
        );
    }
});

module.exports = LeagueTable;
