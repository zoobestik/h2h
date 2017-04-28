import { Component } from 'react';
import PropTypes from 'prop-types';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import PageStore from 'app/stores/Page';
import UserInfoStore from 'app/stores/UserInfo';
import './index.pcss';
import Routes from 'components/Routes'; // eslint-disable-line import/first

useStrict(true);

const props2state = ({ initialState: state }) => ({
    page: new PageStore(state.page),
    userInfo: new UserInfoStore(state.userInfo),
});

export default class App extends Component {
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
        return {
            initialState: this.props.initialState,
        };
    }

    componentWillReceiveProps(props) {
        this.setState(props2state(props));
    }

    render() {
        const { providers, ...props } = this.props;

        return (
            <Provider { ...providers } { ...this.state }>
                <Routes { ...props }/>
            </Provider>
        );
    }
}
