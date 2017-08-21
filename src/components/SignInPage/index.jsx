import { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import withRouter from 'react-router/withRouter';
import DebounceRequest from 'app/stores/DebounceRequest';
import LoginForm from 'components/LoginForm';

const stores2props = ({ auth }) => ({ isAuth: auth.isAuth });

class SignInPage extends Component {
    static propTypes = {
        history: PropTypes.object,
        isAuth: PropTypes.bool,
    };

    constructor(...args) {
        super(...args);
        this.request = new DebounceRequest();
        this.nextRoute = this.nextRoute.bind(this);
    }

    nextRoute(url) {
        this.props.history.replace(url);
    }

    render() {
        const { isAuth, ...props } = this.props;
        return (
            <LoginForm isLoading={ isAuth } { ...props }/>
        );
    }
}

export default withRouter(inject(stores2props)(
    observer(SignInPage)
));
