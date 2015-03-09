'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    MainMenu = require('components/mainMenu'),
    Footer;

Footer = React.createClass({
    render: function() {
        return (
            <footer className="footer">
                <div className="footer__copyright">{ this.props.copyright }</div>
                <div className="footer__contacts">
                    <div className="footer__fork-me">Fork me on <a target="_blank" href={ this.props.forkMeUrl }>{ this.props.forkMe }</a></div>
                    <div className="footer__author">Author: <a target="_blank" href={ this.props.authorUrl }>{ this.props.author }</a></div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;
