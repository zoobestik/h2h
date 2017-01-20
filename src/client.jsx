/* eslint-env browser */
import { render } from 'react-dom';
import browserHistory from 'react-router/lib/browserHistory';
import App from 'components/App';

render(
    <App
        history={ browserHistory }
        initialState={ global.INITIAL_STATE }
    />,
    document.getElementById('app')
);
