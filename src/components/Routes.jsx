import Route from 'react-router/es/Route';
import Switch from 'react-router/es/Switch';
import Redirect from 'react-router/es/Redirect';
import { url } from 'app/lib';

import Layout from 'components/Layout';
import IndexPage from 'components/IndexPage';
import SignIn from 'components/Pages/SignIn';
import NoMatch from 'components/Pages/NoMatch';

export default () => (
    <Layout>
        <Switch>
            {/*<Redirect exact path={ url('/') } to={ url('/explore/') }/>*/}
            <Route path={ url('/explore/') } component={ IndexPage }/>
            <Route path={ url('/login/') } component={ SignIn }/>
            <Route component={ NoMatch }/>
        </Switch>
    </Layout>
);
