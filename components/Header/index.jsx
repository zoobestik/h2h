'use strict';

const React = require('react');
const b = require('bem-cn')('header');
const Link = require('react-router').Link;
const MainMenu = require('components/MainMenu');
const SignIn = require('components/SignIn');

class Header extends React.Component {
    render() {
        return (
            <header className={ b.mix(this.props.mix) }>
                <Link to="app" className={ b('logo') } href="#">H2H Logo</Link>
                <MainMenu menu={ this.props.menu } menuActiveItem={ this.props.activeItem } />
                <SignIn mix={ b('sign-in') }/>
            </header>
        );
    }
}

module.exports = Header;
