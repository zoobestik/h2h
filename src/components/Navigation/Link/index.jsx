import PropTypes from 'prop-types';
import Route from 'react-router/Route';
import withRouter from 'react-router/withRouter';
import NavigationLink from './component';

const NavigationLinkSmart = ({ to, ...props }) => (
    <Route path={ to }>
        { ({ match }) => <NavigationLink to={ to } { ...props } isActive={ match } isCurrent={ match }/> }
    </Route>
);

NavigationLinkSmart.propTypes = {
    children: PropTypes.node,
    to: PropTypes.any.isRequired,
};

export default withRouter(NavigationLinkSmart);
