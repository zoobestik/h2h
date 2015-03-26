'use strict';
var React = require('react'),
    b = require('bem-cn')('sign-in'),
    Link = require('react-router').Link;

module.exports = React.createClass({
    render: function() {
        return (
            <div className={ b.mix(this.props.mix) }>
                <Link to="app">Sign&nbsp;In</Link>
                <Link className={ b('help') } to="app">
                    <img className={ b('help-icon') } width="16" height="16" />
                </Link>
            </div>
        );
    }
});
