import { Component } from 'react';
import ReactPropTypes from 'prop-types';
import { inject, observer, PropTypes } from 'mobx-react';
import Redirect from 'react-router/es/Redirect';
import withRouter from 'react-router/es/withRouter';
import { pubUrl } from 'app/lib';
import Store from 'components/Pages/SignIn/store';
import LoginForm from 'components/LoginForm';

const stores2props = ({ store }) => ({
    page: store.page,
    isAuth: Boolean(store.user),
});

class SignInSmart extends Component {
    static propTypes = {
        history: ReactPropTypes.object,
        location: ReactPropTypes.object,
        match: ReactPropTypes.object,
        staticContext: ReactPropTypes.object,
        page: PropTypes.observableObject,
        isAuth: ReactPropTypes.bool,
        readyUrl: ReactPropTypes.string,
    };

    constructor(...args) {
        super(...args);
        this.store = Store.create();
    }

    componentWillMount() {
        this.props.page.replace(this.store);
    }

    getRedirectUrl() {
        const { isAuth, readyUrl } = this.props;

        if (isAuth) {
            return readyUrl || pubUrl('/');
        }

        return null;
    }

    render() {
        const url = this.getRedirectUrl();

        if (url) {
            return <Redirect to={ url }/>;
        }

        const { isAuth,
            history: _history, location: _location, match: _match, staticContext: _staticContext, page: _page,
            ...props } = this.props;
        return (
            <LoginForm isLoading={ isAuth } { ...props }/>
        );
    }
}

export default withRouter(inject(stores2props)(
    observer(SignInSmart)
));
