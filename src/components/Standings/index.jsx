import { PropTypes, Component } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import Standings from './component';

export default observer(class StandingsSmart extends Component {
    static propTypes = {
        leagueId: PropTypes.number,
    };

    @observable league = [];

    componentWillMount() {
        setTimeout(() => {
            this.requestLeagueData(this.props.leagueId);
        }, 0);
    }

    @action requestLeagueData(leagueId) {
        this.league = [].concat(...new Array(5)).map((_, i) => ({
            id: `league${leagueId}t${i}`,
            name: `Team ${i}`,
            points: i * 100,
        }));
    }

    render() {
        return <Standings teams={ this.league.toJS() }/>;
    }
});
