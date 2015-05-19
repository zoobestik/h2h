'use strict';
const React = require('react');
const b = require('bem-cn')('sign-in');
const Link = require('react-router').Link;

class SignIn extends React.Component {
    render() {
        return (
            <div className={ b.mix(this.props.mix) }>
                <Link to="app">Sign&nbsp;In</Link>
                <Link className={ b('help') } to="app">
                    <img className={ b('help-icon') } width="16" height="16" />
                </Link>
            </div>
        );
    }
}

module.exports = SignIn;
