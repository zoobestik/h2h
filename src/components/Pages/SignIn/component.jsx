import { Component, PropTypes } from 'react';
import withRouter from 'react-router/lib/withRouter';
import LoginForm from '../../../components/LoginForm';

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
            router.replace('/');
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
