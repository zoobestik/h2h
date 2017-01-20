import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import App from './App';
import Layout from './Layout';
import NoMatch from './Pages/NoMatch';

const loader = cb => component => cb(null, component.default);

export const Routes = (
    <Route component={ App }>
        <Route path="/" component={ Layout }>
            <IndexRedirect to="explore/"/>
            <Route path="explore/" getComponent={ (location, cb) => System.import('./Pages/Index').then(loader(cb)) }>
                <Route path="scores/" component={ () => <div>!!!</div> }/>
            </Route>
            <Route path="login/" getComponent={ (location, cb) => System.import('./Pages/SignIn').then(loader(cb)) }/>
            <Route path="*" component={ NoMatch }/>
        </Route>
    </Route>
);

export default props => <Router { ...props }>{ Routes }</Router>;
