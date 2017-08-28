import { Component } from 'react';
import ReactPropTypes from 'prop-types';
import { computed } from 'mobx';
import { inject, observer, PropTypes } from 'mobx-react';
import Redirect from 'react-router/es/Redirect';
import { pubUrl } from 'app/lib';
import { login } from 'app/api/auth';
import Store from 'components/Pages/SignIn/store';
import LoginForm from 'components/LoginForm';

const stores2props = ({ store }) => ({
    setPage: store.page.replace,
    setUser: store.setUser,
    user: store.user,
});

class SignInSmart extends Component {
    static propTypes = {
        user: PropTypes.observableObject,
        setPage: ReactPropTypes.func,
        setUser: ReactPropTypes.func,
        readyUrl: ReactPropTypes.string,
    };

    constructor(...args) {
        super(...args);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.setPage(Store.create());
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
        if (this.isAuth) {
            return this.props.readyUrl || pubUrl('/');
        }
        return null;
    }

    render() {
        const url = this.redirectUrl;
        if (url) return <Redirect to={ url }/>;
        return <LoginForm isLoading={ this.isAuth } onSubmit={ this.onSubmit }/>;
    }
}

export default inject(stores2props)(
    observer(SignInSmart)
);
