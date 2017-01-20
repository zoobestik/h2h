import { Component, PropTypes } from 'react';
import withRouter from 'react-router/lib/withRouter';
import { getPublicPath } from 'app/lib/paths';
import LoginForm from 'components/LoginForm';

const rootPath = getPublicPath('/');

class SignIn extends Component {
    componentWillMount() {
        this.checkUrl();
    }

    componentWillReceiveProps(props) {
        this.checkUrl(props);
    }

    checkUrl(props) {
        const { router, isAuth } = props || this.props;

        if (isAuth) {
            router.replace(rootPath);
        }
    }

    render() {
        if (this.props.isAuth) {
            return <div>...</div>;
        }

        return <LoginForm/>;
    }
}

SignIn.propTypes = {
    isAuth: PropTypes.bool,
};

export default withRouter(SignIn);
