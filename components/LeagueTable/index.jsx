'use strict';

const React = require('react');
const b = require('bem-cn')('league-table');

class LeagueTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { table: this.props.data || [] };
    }

    getTableView() {
        return this.state.table.map(function(item, i) {
            return (
                <tr className={ b('line') } key={ item.user.id }>
                    <td className={ b('cell').mix(b('pos')) }>{ i + 1 }</td>
                    <td className={ b('cell').mix(b('username')) }>{ item.user.name }</td>
                    <td className={ b('cell').mix(b('points')) }>{ item.pts }</td>
                </tr>
            );
        });
    }

    render() {
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
}

module.exports = LeagueTable;
