import { PureComponent, PropTypes } from 'react';
import { Provider } from 'mobx-react';
import PageStore from 'app/stores/Page';
import UserInfoStore from 'app/stores/UserInfo';
import Router from 'components/Router';

import './index.pcss';

const props2state = ({ initialState: state }) => ({
    page: new PageStore(state.page),
    userInfo: new UserInfoStore(state.userInfo),
});

export default class App extends PureComponent {
    static defaultProps = {
        initialState: {},
        providers: {},
    };

    static propTypes = {
        initialState: PropTypes.object,
        providers: PropTypes.object,
    };

    static childContextTypes = {
        initialState: PropTypes.object,
    };

    constructor(props, context) {
        super(props, context);
        this.state = props2state(props);
    }

    getChildContext() {
        const { initialState } = this.props;

        return {
            initialState,
        };
    }

    componentWillReceiveProps(props) {
        this.setState(props2state(props));
    }

    render() {
        const { providers, ...props } = this.props;

        return (
            <Provider { ...providers } { ...this.state }>
                <Router { ...props }/>
            </Provider>
        );
    }
}
