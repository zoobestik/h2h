import { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { pubUrl } from 'app/lib';
import LoginForm from './component';

const stores2props = ({ auth }) => ({
    isAuth: auth.isAuth,
    isLoading: auth.isProgress,
    onSubmit: auth.login,
});

class LoginFormSmart extends Component {
    static propTypes = {
        onNextReady: PropTypes.func,
        isAuth: PropTypes.bool,
    };

    constructor(...args) {
        super(...args);
        this.request = new DebounceRequest();
    }

    componentWillMount() {
        this.checkUrl();
    }

    componentWillReceiveProps(props) {
        this.checkUrl(props);
    }

    checkUrl(props) {
        const { isAuth, onNextReady } = props || this.props;

        if (isAuth && onNextReady) {
            onNextReady(pubUrl('/'));
        }
    }

    render() {
        const { onNextReady: _onNextReady, isAuth, ...props } = this.props;
        return (
            <LoginForm isLoading={ isAuth } { ...props }/>
        );
    }
}

export default inject(stores2props)(
    observer(LoginFormSmart)
);
