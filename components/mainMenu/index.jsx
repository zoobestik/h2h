'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    RouterState = require('react-router').State,
    MainMenu;

MainMenu = React.createClass({
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

    render: function () {
        return (
            <nav className="main-menu">
                <ul className="main-menu__list">
                    { this.getItemsView() }
                </ul>
            </nav>
        );
    }
});

module.exports = MainMenu;
