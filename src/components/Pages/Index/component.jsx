import block from 'bem-cn';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getPublicPath } from 'app/lib/paths';
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
        to: getPublicPath('/explore/'),
        caption: 'Match Day',
    },
    {
        to: getPublicPath('/explore/scores/'),
        caption: 'Scores',
    },
];

export default class Index extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        url: PropTypes.string,
    };

    render() {
        const { children, url } = this.props;
        return (
            <div className={ b() }>
                <div className={ classTables() }>
                    <Standings className={ classStandings() } leagueId={ 0 }/>
                    <Tabs
                        className={ classInformation() }
                        tabs={ tabs.map(tab => ({
                            ...tab,
                            isActive: tab.to === url,
                        })) }
                    >
                        { children }
                    </Tabs>
                </div>
                <SocialPane className={ classSocial() }/>
            </div>
        );
    }
}
