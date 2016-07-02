import { Component } from 'react';
import { generateId, sendForm } from '../../lib/index';
import LoginForm from './component';

class LoginFormSmart extends Component {
    constructor(props) {
        super(props);

        this.requestId = null;

        this.state = {
            requestId: this.requestId,
        };

        this.onRequestEnd = this.onRequestEnd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onRequestEnd() {
        this.setRequestId();
    }

    onSubmit(args) {
        this.setRequestId(generateId());

        sendForm(args)
            .then(this.onRequestEnd, this.onRequestEnd);
    }

    setRequestId(requestId) {
        this.requestId = requestId || null;
        this.updateState();
    }

    updateState() {
        this.setState({
            isLoading: this.requestId !== null,
        });
    }

    render() {
        return (
            <LoginForm
                { ...this.props }
                isLoading={ this.state.isLoading }
                onSubmit={ this.onSubmit }
            />
        );
    }
}

export default LoginFormSmart;
