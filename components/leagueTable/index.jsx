'use strict';
var React = require('react'),
    b = require('bem-cn')('league-table');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            table: this.props.data || []
        }
    },

    getTableView: function() {
        return this.state.table.map(function(item, i) {
            return (
                <tr className={ b('line') } key={ item.user.id }>
                    <td className={ b('cell').mix(b('pos')) }>{ i + 1 }</td>
                    <td className={ b('cell').mix(b('username')) }>{ item.user.name }</td>
                    <td className={ b('cell').mix(b('points')) }>{ item.pts }</td>
                </tr>
            );
        });
    },

    render: function() {
        return (
            <table className={ b.mix(this.props.mix) }>
                <thead>
                    <tr>
                        <th className={ b('head-cell') }>Pos</th>
                        <th className={ b('head-cell') }>Team</th>
                        <th className={ b('head-cell') }>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    { this.getTableView() }
                </tbody>
            </table>
        );
    }
});
