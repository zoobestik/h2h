import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import Index from '../Pages/Index';
import SignIn from '../Pages/SignIn';
import NoMatch from '../Pages/NoMatch';

export default props => (
    <Router { ...props }>
        <Route path="/">
            <IndexRoute component={ Index }/>
            <Route path="login" components={ SignIn }/>
            <Route path="*" component={ NoMatch }/>
        </Route>
    </Router>
);
