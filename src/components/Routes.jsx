import Route from 'react-router/es/Route';
import Switch from 'react-router/es/Switch';
import Redirect from 'react-router/es/Redirect';
import { getPublicUrl } from 'app/lib';

import Layout from 'components/Layout';
import IndexRoute from 'components/IndexPage';
import SignIn from 'components/Pages/SignIn';
import NoMatch from 'components/Pages/NoMatch';

//export default props => (
//    <Route path={ getPublicUrl() } { ...props }>
export default props => (
    <Layout>
        <Switch location={ getPublicUrl() }>
            <Route exact path="/" component={ IndexRoute }/>
            <Route path="/explore" component={ IndexRoute }/>
            <Route path="/login" component={ SignIn }/>
            <Route component={ NoMatch }/>
        </Switch>
    </Layout>
);
//    </Route>
//);
