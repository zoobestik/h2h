import { Component } from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import LoginForm from './component';

class LoginFormSmart extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.userInfo.authorize(data);
    }

    isLoading() {
        return this.userInfo.authRequest.isProgress;
    }

    get userInfo() {
        return this.props.userInfo;
    }

    render() {
        return (
            <LoginForm
                onSubmit={ this.onSubmit }
                isLoading={ this.isLoading() }
            />
        );
    }
}

LoginFormSmart.propTypes = {
    userInfo: PropTypes.objectOrObservableObject,
};

export default inject('userInfo')(observer(LoginFormSmart));
