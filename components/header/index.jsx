'use strict';
var React = require('react'),
    b = require('bem-cn')('header'),
    Link = require('react-router').Link,
    MainMenu = require('components/mainMenu'),
    SignIn = require('components/signIn');

module.exports = React.createClass({
    render: function() {
        return (
            <header className={ b.mix(this.props.mix) }>
                <Link to="app" className={ b('logo') } href="#">H2H Logo</Link>
                <MainMenu menu={ this.props.menu }  menuActiveItem={ this.props.activeItem } />
                <SignIn mix={ b('sign-in') }/>
            </header>
        );
    }
});
