import Route from 'react-router/es/Route';
import Redirect from 'react-router/es/Redirect';
import { getPublicUrl } from 'app/lib';

import Layout from 'components/Layout';
import IndexRoute from 'components/IndexPage';
import SignIn from 'components/Pages/SignIn';
import NoMatch from 'components/Pages/NoMatch';

export default props => (
    <Route path={ getPublicUrl() } { ...props }>
        <Layout>
            <Route path="/explore" component={ IndexRoute }/>
            <Route path="/login" component={ SignIn }/>
            <Route exact path="/" component={ () => <Redirect exact from="/" to="explore/"/> }/>
            { /* <Redirect exact from="/" to="explore/"/> */ }
            <Route path="*" component={ NoMatch }/>
        </Layout>
    </Route>
);
