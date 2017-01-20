import withRouter from 'react-router/lib/withRouter';
import Index from './component';

export default withRouter(({ router, ...props }) => (
    <Index url={ router.location.pathname } { ...props }/>
));
