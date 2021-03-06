import { Component } from 'react';
import { PropTypes, Provider } from 'mobx-react';
import ErrorBoundary from 'components/ErrorBoundary';
import './index.pcss';
import Routes from 'components/Routes/Root'; // eslint-disable-line import/first

export default class App extends Component {
    static propTypes = {
        store: PropTypes.observableObject,
    };

    render() {
        const { store } = this.props;
        return (
            <ErrorBoundary>
                <Provider store={ store }>
                    <Routes/>
                </Provider>
            </ErrorBoundary>
        );
    }
}
