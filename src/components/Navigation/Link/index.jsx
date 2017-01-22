import { PropTypes } from 'react';
import withRouter from 'react-router/lib/withRouter';
import { routerShape } from 'react-router/lib/PropTypes';
import NavigationLink from './component';

const NavigationLinkSmart = ({ to, children, router }) => (
    <NavigationLink to={ to } isActive={ router.isActive(to) } isCurrent={ router.isActive(to, true) }>
        { children }
    </NavigationLink>
);

NavigationLinkSmart.propTypes = {
    children: PropTypes.node,
    to: PropTypes.any.isRequired,
    router: routerShape.isRequired,
};

export default withRouter(NavigationLinkSmart);
