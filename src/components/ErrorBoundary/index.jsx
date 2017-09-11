import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { internalError: null };
    }

    componentDidCatch(error, info) {
        this.setState({
            internalError: { error, info },
        });
    }

    render() {
        if (this.state.internalError) {
            return (
                <div>
                    Oops! We&apos;re sorry, but something went wrong. Try go to <a href="/">home</a>
                    , or contact <a href="https://t.me/zoobestik">with me</a>.
                </div>
            );
        }

        return this.props.children;
    }
}
