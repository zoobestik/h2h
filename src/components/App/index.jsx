import { Component } from 'react';
import PropTypes from 'prop-types';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import AppStore from 'components/App/stores/App';
import ErrorBoundary from 'components/ErrorBoundary';
import './index.pcss';
import Routes from 'components/Routes'; // eslint-disable-line import/first

useStrict(true);

export default class App extends Component {
    static propTypes = {
        store: PropTypes.shape({
            auth: PropTypes.object,
            page: PropTypes.object,
        }),
    };

    render() {
        const { store: { auth, page }, ...props } = this.props;
        return (
            <ErrorBoundary>
                <Provider page={ page } auth={ auth }>
                    <Routes { ...props }/>
                </Provider>
            </ErrorBoundary>
        );
    }
}

export const Store = AppStore;
