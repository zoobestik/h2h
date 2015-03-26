'use strict';
var React = require('react'),
    b = require('bem-cn')('layout'),
    Header = require('components/header'),
    Footer = require('components/footer');

module.exports = React.createClass({
    render: function() {
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
});
