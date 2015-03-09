'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    MainMenu = require('components/mainMenu'),
    Footer = require('components/footer'),
    Layout;

Layout = React.createClass({
    render: function() {
        return (
            <div className="layout">
                <header className="header">
                    <Link to="app" className="header__logo" href="#">H2H Logo</Link>
                    <MainMenu menu={ this.props.menu }  menuActiveItem={ this.props.activeItem } />
                    <div className="header__sign-in sign-in">
                        <Link to="app">Sign&nbsp;In</Link>
                        <Link className="sign-in__help" to="app">
                            <img className="sign-in__help-icon" width="16" height="16" />
                        </Link>
                    </div>
                </header>
                <hr className="layout__line layout__line_top line" />
                <main className="layout__main">
                    { this.props.children }
                </main>
                <hr className="layout__line line" />
                <Footer
                    copyright="© 2014–2015"

                    forkMe="github.com"
                    forkMeUrl="https://github.com/zoobestik/h2h"

                    author="zoobestik"
                    authorUrl="https://www.linkedin.com/in/kbchernenko"
                />
            </div>
        );
    }
});

module.exports = Layout;
