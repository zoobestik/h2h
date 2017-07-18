import { Component } from 'react';
import withRouter from 'react-router/withRouter';
import LoginForm from 'components/LoginForm';

class SignIn extends Component {
    static propTypes = {
    };

    constructor(props, context) {
        super(props, context);

        this.nextRoute = this.nextRoute.bind(this);
    }

    nextRoute(url) {
        this.props.router.replace(url);
    }

    render() {
        return (
            <LoginForm onNextReady={ this.nextRoute }/>
        );
    }
}

export default withRouter(SignIn);
