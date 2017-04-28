import { Component } from 'react';
import PropTypes from 'prop-types';
import { computed, runInAction, observable } from 'mobx';
import { observer } from 'mobx-react';
import SingleTimeRequest from 'app/stores/SingleTimeRequest';
import { getStandings } from 'app/api/league';
import Standings from './component';

export default observer(class StandingsSmart extends Component {
    static propTypes = {
        leagueId: PropTypes.number.isRequired,
    };

    leagueRequest = new SingleTimeRequest();

    @observable standingData = [];

    @computed get standing() {
        return this.standingData.toJS();
    }

    set standing(data) {
        runInAction(() => (this.standingData = data));
    }

    componentWillMount() {
        this.requestLeague(this.props.leagueId);
    }

    requestLeague(leagueId) {
        this.leagueRequest
            .send(getStandings(leagueId))
            .then(data => {
                this.standing = data;
            });
    }

    render() {
        const { leagueId: _leagueId, ...props } = this.props;
        return <Standings { ...props } teams={ this.standing }/>;
    }
});
