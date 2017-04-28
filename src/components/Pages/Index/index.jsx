import PropTypes from 'prop-types';
import withRouter from 'react-router/lib/withRouter';
import { routerShape } from 'react-router/lib/PropTypes';
import Index from './component';

export IndexDayTab from './components/DayTab';
export IndexScoresTab from './components/ScoresTab';

const IndexSmart = ({ router, children }) => (
    <Index url={ router.location.pathname }>{children}</Index>
);

IndexSmart.propTypes = {
    router: routerShape.isRequired,
    children: PropTypes.node,
};

export default withRouter(IndexSmart);
