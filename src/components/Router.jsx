import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './App';
import Layout from './Layout';
import Index from './Pages/Index';
import SignIn from './Pages/SignIn';
import NoMatch from './Pages/NoMatch';

export const Routes = (
    <Route component={ App }>
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Index }/>
            <Route path="login/" components={ SignIn }/>
            <Route path="*" component={ NoMatch }/>
        </Route>
    </Route>
);

export default props => <Router { ...props }>{ Routes }</Router>;
