import Route from 'react-router/es/Route';
import Switch from 'react-router/es/Switch';
import Redirect from 'react-router/es/Redirect';
import { pubUrl } from 'app/lib';

import Layout from 'components/Layout';
import ErrorPageBoundary from 'components/ErrorBoundary';
import IndexPage from 'components/IndexPage';
import SignIn from 'components/Pages/SignIn';
import NoMatch from 'components/Pages/NoMatch';

export default () => (
    <Layout>
        <ErrorPageBoundary>
            <Switch>
                <Redirect exact path={ pubUrl('/') } to={ pubUrl('/explore/') }/>
                <Route path={ pubUrl('/explore/') } component={ IndexPage }/>
                <Route path={ pubUrl('/login/') } component={ SignIn }/>
                <Route component={ NoMatch }/>
            </Switch>
        </ErrorPageBoundary>
    </Layout>
);
