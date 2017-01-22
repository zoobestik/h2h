import { PureComponent, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import { getPublicPath } from 'app/lib/paths';
import LoginForm from './component';

const stores2props = ({ userInfo }) => ({
    isAuth: userInfo.isAuth,
    isLoading: userInfo.isProgress,
    onSubmit: userInfo.authorize.bind(userInfo),
});

class LoginFormSmart extends PureComponent {
    static propTypes = {
        onNextReady: PropTypes.func,
        isAuth: PropTypes.bool,
    };

    componentWillMount() {
        this.checkUrl();
    }

    componentWillReceiveProps(props) {
        this.checkUrl(props);
    }

    checkUrl(props) {
        const { isAuth, onNextReady } = props || this.props;

        if (isAuth) {
            onNextReady(getPublicPath('/'));
        }
    }

    render() {
        const { onNextReady: _onNextReady, isAuth, ...props } = this.props;
        return (
            <LoginForm locked={ isAuth } { ...props }/>
        );
    }
}

export default inject(stores2props)(observer(LoginFormSmart));
