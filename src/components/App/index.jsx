import { Component } from 'react';
import { PropTypes, Provider } from 'mobx-react';
import ErrorBoundary from 'components/ErrorBoundary';
import './index.pcss';
import Routes from 'components/Routes'; // eslint-disable-line import/first

export default class App extends Component {
    static propTypes = {
        store: PropTypes.observableObject,
    };

    render() {
        const { store, ...props } = this.props;
        return (
            <ErrorBoundary>
                <Provider store={ store }>
                    <Routes store={ store }/>
                </Provider>
            </ErrorBoundary>
        );
    }
}
