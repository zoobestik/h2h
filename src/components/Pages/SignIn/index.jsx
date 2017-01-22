import { Component } from 'react';
import withRouter from 'react-router/lib/withRouter';
import { routerShape } from 'react-router/lib/PropTypes';
import LoginForm from 'components/LoginForm';

class SignIn extends Component {
    static propTypes = {
        router: routerShape,
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
