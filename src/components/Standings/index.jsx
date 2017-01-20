import { PropTypes, Component } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { getStandings } from 'app/api/league';
import Standings from './component';

export default observer(class StandingsSmart extends Component {
    static propTypes = {
        leagueId: PropTypes.number,
    };

    @observable league = [];

    componentWillMount() {
        this.updateLeague(this.props.leagueId);
    }

    @action async updateLeague(leagueId) {
        this.league = await getStandings(leagueId);
    }

    render() {
        const props = this.props;
        return <Standings { ...props } teams={ this.league.toJS() }/>;
    }
});
