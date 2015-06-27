'use strict';

const React = require('react');
const b = require('bem-cn')('main-menu');
const Link = require('react-router').Link;
const RouterState = require('react-router').State;

module.exports = React.createClass({
    mixins: [ RouterState ],

    getItemsView: function() {
        var self = this;

        return this.props.menu.map(function(item) {
            var text = item.text;

            if ( ! self.isActive(item.to)) {
                text = <Link to={ 'app' || item.to }>{ text }</Link>;
            }

            return <li key={ item.to } className="main-menu__item">{ text }</li>;
        });
    },

    render: function() {
        return (
            <nav className={ b.mix(this.props.mix) }>
                <ul className={ b('list') }>
                    { this.getItemsView() }
                </ul>
            </nav>
        );
    }
});
