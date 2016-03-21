import React from 'react';

export default class UserState extends React.Component {
    render() {
        const user = this.props.user;

        const content = user.uid ?
            <a href='#'>Logout</a> :
            'Sing In';

        return (
            <div>{ content }</div>
        );
    }
}
