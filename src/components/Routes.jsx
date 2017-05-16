import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import Redirect from 'react-router/lib/Redirect';
import IndexRoute from 'react-router/lib/IndexRoute';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import { getPublicPath } from 'app/lib/paths';

import Layout from './Layout';
import NoMatch from './Pages/NoMatch';

import IndexPage, { IndexDayTab, IndexScoresTab } from './Pages/Index';
import SignIn from './Pages/SignIn';

const loader = module => cb => cb(null, module);

export const Routes = (
    <Route>
        <Route path={ getPublicPath() }>
            <Route component={ ({ children }) => <Layout>{ children }</Layout> }>
                <IndexRedirect to="explore/"/>
                <Route path="explore/" getComponent={ (location, cb) => loader(IndexPage)(cb) }>
                    <IndexRoute getComponent={ (location, cb) => loader(IndexDayTab)(cb) }/>
                    <Route path="scores/" getComponent={ (location, cb) => loader(IndexScoresTab)(cb) }/>
                </Route>
                <Route path="login/" getComponent={ (location, cb) => loader(SignIn)(cb) }/>
                <Route path="*" component={ NoMatch }/>
            </Route>
        </Route>
        <Redirect from="*" to={ getPublicPath() }/>
    </Route>
);

export default props => <Router { ...props }>{ Routes }</Router>;
