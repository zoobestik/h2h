import { inject, observer, Provider } from 'mobx-react';
import Route from 'react-router/es/Route';
import Switch from 'react-router/es/Switch';
import Redirect from 'react-router/es/Redirect';
import { pubUrl } from 'app/lib';

import Layout from 'components/Layout';
import ErrorPageBoundary from 'components/ErrorBoundary';
import IndexPage from 'components/Pages/Index';
import SignIn from 'components/Pages/SignIn';
import NoMatch from 'components/Pages/NoMatch';

const routes = [
    {
        key: 'explore',
        path: pubUrl('/explore/'),
        Component: IndexPage,
    },
    {
        key: 'login',
        path: pubUrl('/login/'),
        Component: SignIn,
    },
    {
        key: 'no-match',
        Component: NoMatch,
    },
];

const stores2props = ({ store }) => ({ setPage: store.page.replace });

const PageProvider = inject(stores2props)(
    observer(({ Component, setPage }) => (
        <Provider page={ setPage(Component.createStore()) }>
            <Component/>
        </Provider>
    ))
);

export default () => (
    <Layout>
        <ErrorPageBoundary>
            <Switch>
                <Redirect exact path={ pubUrl('/') } to={ pubUrl('/explore/') }/>
                {
                    routes.map(({ Component, ...route }) => (
                        <Route { ...route } render={ () => <PageProvider Component={ Component }/> }/>
                    ))
                }
            </Switch>
        </ErrorPageBoundary>
    </Layout>
);

