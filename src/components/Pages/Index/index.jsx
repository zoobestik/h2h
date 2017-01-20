import withRouter from 'react-router/lib/withRouter';
import Index from './component';

export default withRouter(({ router, ...props }) => (
    <Index isActive={ router.isActive } { ...props }/>
));
