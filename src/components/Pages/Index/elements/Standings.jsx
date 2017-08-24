import { Component } from 'react';
import { toJS } from 'mobx';
import { PropTypes, inject, observer } from 'mobx-react';
import Standings from 'components/Standings';

const stores2props = ({ page }) => ({ standings: page.standings });

class StandingsSmart extends Component {
    static propTypes = {
        standings: PropTypes.observableArray,
    };

    render() {
        const { standings, ...props } = this.props;
        return (
            <Standings { ...props } teams={ toJS(standings) }/>
        );
    }
}

export default inject(stores2props)(
    observer(StandingsSmart)
);
