import { Component } from 'react';
import PropTypes from 'prop-types';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import AppStore from 'components/App/stores/App';
import './index.pcss';
import Routes from 'components/Routes'; // eslint-disable-line import/first

useStrict(true);

export default class App extends Component {
    static propTypes = {
        store: PropTypes.object,
    };

    render() {
        const { store, ...props } = this.props;
        return (
            <Provider page={ store.page } auth={ store.auth }>
                <Routes { ...props }/>
            </Provider>
        );
    }
}

export const Store = AppStore;
