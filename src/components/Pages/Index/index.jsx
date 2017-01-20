import withRouter from 'react-router/lib/withRouter';
import Index from './component';

export IndexDayTab from './components/DayTab';
export IndexScoresTab from './components/ScoresTab';

export default withRouter(({ router, ...props }) => (
    <Index url={ router.location.pathname } { ...props }/>
));
