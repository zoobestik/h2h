import block from 'bem-cn';
import { PropTypes, PureComponent } from 'react';

import './index.pcss';

export const b = block('standings');
export const rowClass = b('row');
export const cellClass = b('cell');
export const cellHeadClass = cellClass.mix(cellClass({ head: true }));
export const cellItemClass = cellClass.mix(cellClass({ item: true }));

export const Presets = {
    short: ['num', 'name', 'points'],
};

export default class Standings extends PureComponent {
    static propTypes = {
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),
        preset: PropTypes.string,
        teams: PropTypes.arrayOf(
            PropTypes.object,
        ),
    };

    render() {
        const { className, preset, teams, ...props } = this.props;
        const currentPreset = Object.keys(Presets).indexOf(preset) !== -1 ? preset : 'short';
        const fields = Presets[currentPreset];

        return (
            <table { ...props } className={ b({ preset: currentPreset }).mix(className) }>
                <thead>
                    <tr className={ rowClass }>
                        { fields.map(field => <th key={ field } className={ cellHeadClass }>{ field }</th>) }
                    </tr>
                </thead>
                <tbody>
                    { (Array.isArray(teams) ? teams : []).map((team, num) => (
                        <tr key={ team.id } className={ rowClass }>{
                            fields.map(type => (
                                <td key={ type } className={ cellItemClass({ type }).toString() }>
                                    { type === 'num' ? num + 1 : team[type] }
                                </td>
                            ))
                        }</tr>
                    )) }
                </tbody>
            </table>
        );
    }
}
