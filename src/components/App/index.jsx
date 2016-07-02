import { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from '../Routes';

const Root = ({ store, history }) => (
    <Provider store={ store }>
        <Routes history={ history }/>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
};

export default Root;
