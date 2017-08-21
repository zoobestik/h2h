import block from 'bem-cn';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router/es/Route';
import Switch from 'react-router/es/Switch';
import { pubUrl } from 'app/lib';
import Standings from 'components/Standings';
import Tabs from 'components/Tabs';
import SocialPane from 'components/SocialPane';
import IndexDayTab from 'components/IndexPage/components/DayTab';
import IndexScoresTab from 'components/IndexPage/components/ScoresTab';

import './index.pcss';

const b = block('index-page');
const classTables = b('tables');
const classInformation = b('information');
const classStandings = b('standings');
const classSocial = b('social');

const tabs = [
    {
        to: pubUrl('/explore/'),
        caption: 'Match Day',
    },
    {
        to: pubUrl('/explore/scores/'),
        caption: 'Scores',
    },
];

export default class IndexPage extends Component {
    static propTypes = {
        standings: PropTypes.arrayOf(PropTypes.object),
        url: PropTypes.string,
    };

    render() {
        const { standings, url } = this.props;
        return (
            <div className={ b() }>
                <div className={ classTables() }>
                    <Standings className={ classStandings() } teams={ standings }/>
                    <Tabs
                        className={ classInformation() }
                        tabs={ tabs.map(tab => ({
                            ...tab,
                            isActive: tab.to === url,
                        })) }
                    >
                        <Switch>
                            <Route path="/" component={ IndexDayTab }/>
                            <Route path="scores/" component={ IndexScoresTab }/>
                        </Switch>
                    </Tabs>
                </div>
                <SocialPane className={ classSocial() }/>
            </div>
        );
    }
}
