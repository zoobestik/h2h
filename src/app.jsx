import { PropTypes } from 'react';
import { Provider } from 'mobx-react';
import createStore from './createStore';
import Router from './components/Router';

const Root = ({ history, initialState }) => (
    <Provider { ...createStore(initialState) }>
        <Router history={ history }/>
    </Provider>
);

Root.propTypes = {
    history: PropTypes.object,
    initialState: PropTypes.object,
};

export default Root;
