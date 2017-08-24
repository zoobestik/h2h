import { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router/es/withRouter';
import Tabs from 'components/Tabs';

class TabsSmart extends Component {
    static propTypes = {
        tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {
        const { tabs, location, match: _match, history: _history, ...props } = this.props;
        const url = location.pathname;
        return (
            <Tabs
                { ...props }
                tabs={ tabs.map(tab => ({
                    ...tab,
                    isActive: tab.to === url,
                })) }
            />
        );
    }
}

export default withRouter(TabsSmart);
