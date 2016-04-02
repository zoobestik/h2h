import { Component } from 'react';
import { connect } from 'react-redux';

class UserState extends Component {
    getLink() {
        const user = this.props.user;

        if (user.get('uid')) {
            return (
                <a href='#'>Logout</a>
            );
        }

        return 'Sign In';
    }

    render() {
        return (
            <div>
                { this.getLink() }
            </div>
        );
    }
}

export default connect(state => ({ user: state.get('user') }))(UserState);
