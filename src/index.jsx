/* eslint-env browser */
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import createStore from './store';
import App from './components/App';

const store = global.store = createStore(global.INITIAL_STATE);

render(
    <App history={ browserHistory } store={ store }/>,
    document.getElementById('app')
);
