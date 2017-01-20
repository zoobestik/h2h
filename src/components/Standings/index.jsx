import { PropTypes, Component } from 'react';
import { runInAction, observable } from 'mobx';
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

    async updateLeague(leagueId) {
        const league = await getStandings(leagueId);
        runInAction(() => (this.league = league));
    }

    render() {
        const props = this.props;
        return <Standings { ...props } teams={ this.league.toJS() }/>;
    }
});
