import { PropTypes, PureComponent } from 'react';
import block from 'bem-cn';
import Standings from 'components/Standings';
import Tabs from 'components/Tabs';
import SocialPane from 'components/SocialPane';

import './index.pcss';

const b = block('index-page');
const classTables = b('tables');
const classInformation = b('information');
const classStandings = b('standings');
const classSocial = b('social');

const tabs = [
    {
        to: '',
        caption: 'Match Day',
    },
    {
        to: 'scores/',
        caption: 'Scores',
    },
];

export default class Index extends PureComponent {
    static propTypes = {
        isActive: PropTypes.func,
    };

    render() {
        const { isActive } = this.props;
        return (
            <div className={ b }>
                <div className={ classTables }>
                    <Standings className={ classStandings } leagueId={ 0 }/>
                    <Tabs
                        className={ classInformation }
                        tabs={ tabs.map(tab => ({
                            ...tab,
                            active: isActive(tab.to),
                        })) }
                    />
                </div>
                <SocialPane className={ classSocial }/>
            </div>
        );
    }
}
