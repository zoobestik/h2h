import { Component } from 'react';
import ReactPropTypes from 'prop-types';
import { computed } from 'mobx';
import { inject, observer, PropTypes } from 'mobx-react';
import { pubUrl } from 'app/lib';
import { login } from 'app/api/auth';
import Store from 'components/Pages/SignIn/store';
import LoginForm from 'components/LoginForm';

const routes = [
    {
        pattern: '/login/',
        data: {
            method: 'GET',
        },
    },
];

const stores2props = ({ store }) => ({
    setUser: store.setUser,
    user: store.user,
});

@observer
class SignInSmart extends Component {
    static propTypes = {
        user: PropTypes.observableObject,
        setUser: ReactPropTypes.func,
        readyUrl: ReactPropTypes.string,
    };

    static store = Store;
    static routes = routes;

    constructor(...args) {
        super(...args);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit({ id, password }) {
        login(id, password).then(data => {
            this.user = data;
        });
    }

    @computed get isAuth() {
        return Boolean(this.user);
    }

    @computed get user() {
        return this.props.user;
    }

    set user(data) {
        this.props.setUser(data);
    }

    get redirectUrl() {
        return this.isAuth ? this.props.readyUrl || pubUrl('/') : null;
    }

    render() {
        // const url = this.redirectUrl;
        // if (url) return <Redirect to={ url }/>;
        return <LoginForm isLoading={ this.isAuth } onSubmit={ this.onSubmit }/>;
    }
}

export default inject(stores2props)(SignInSmart);
