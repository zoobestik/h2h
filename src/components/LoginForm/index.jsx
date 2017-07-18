import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { getPublicUrl } from 'app/lib';
import LoginForm from './component';

const stores2props = ({ auth }) => ({
    isAuth: auth.isAuth,
    isLoading: auth.isProgress,
    onSubmit: auth.login,
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

        if (isAuth && onNextReady) {
            onNextReady(getPublicUrl('/'));
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
