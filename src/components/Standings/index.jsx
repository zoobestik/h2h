import block from 'bem-cn';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.pcss';

export const b = block('standings');
export const rowClass = b('row');
export const cellClass = b('cell');
export const cellHeadClass = cellClass.mix(cellClass({ head: true }));
export const cellItemClass = cellClass.mix(cellClass({ item: true }));

const normalize = items => items.map(item => ({
    title: item.value,
    ...item,
}));

export const Presets = {
    short: normalize([
        { value: 'pos' },
        { value: 'name' },
        { value: 'points' },
    ]),
};

export default class Standings extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        preset: PropTypes.string,
        teams: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        const { className, preset, teams, ...props } = this.props;
        const currentPreset = Object.keys(Presets).indexOf(preset) !== -1 ? preset : 'short';
        const fields = Presets[currentPreset];

        return (
            <table { ...props } className={ b({ preset: currentPreset }).mix(className)() }>
                <thead>
                    <tr className={ rowClass() }>{
                        fields.map(({ title, value }) => <th key={ value } className={ cellHeadClass() }>{ title }</th>)
                    }</tr>
                </thead>
                <tbody>
                    { (Array.isArray(teams) ? teams : []).map((team, num) => (
                        <tr key={ team.id } className={ rowClass() }>{
                            fields.map(({ value }) => (
                                <td key={ value } className={ cellItemClass({ value })() }>
                                    { value === 'pos' ? num + 1 : team[value] }
                                </td>
                            ))
                        }</tr>
                    )) }
                </tbody>
            </table>
        );
    }
}
