'use strict';

const React = require('react');
const b = require('bem-cn')('layout');
const Header = require('components/Header');
const Footer = require('components/Footer');

class Layout extends React.Component {

    static get propTypes() {
        return {
            children: React.PropTypes.any,
            menu: React.PropTypes.any,
            mix: React.PropTypes.any, // TODO: Array or Object
        };
    }

    render() {
        return (
            <div className={ b.mix(this.props.mix) }>
                <Header menu={ this.props.menu }/>
                <hr className={ b('line', { top: true }).mix('line') } />
                <main className={ b('main') }>
                    { this.props.children }
                </main>
                <hr className={ b('line').mix('line') } />
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
}

module.exports = Layout;
