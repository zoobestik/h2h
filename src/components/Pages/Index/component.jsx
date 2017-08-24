import block from 'bem-cn';
import { Component } from 'react';
import Route from 'react-router/es/Route';
import Switch from 'react-router/es/Switch';
import { pubUrl } from 'app/lib';
import SocialPane from 'components/SocialPane';
import IndexDayTab from 'components/Pages/Index/elements/DayTab';
import IndexScoresTab from 'components/Pages/Index/elements/ScoresTab';
import Standings from 'components/Pages/Index/elements/Standings';
import Tabs from 'components/Pages/Index/elements/Tabs';

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
    render() {
        return (
            <div className={ b() }>
                <div className={ classTables() }>
                    <Standings className={ classStandings() }/>
                    <Tabs className={ classInformation() } tabs={ tabs.map(tab => ({ ...tab })) }>
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
