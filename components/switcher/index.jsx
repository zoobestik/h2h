'use strict';

var React = require('react'),
    Link = require('react-router').Link,
    Switcher;

Switcher = React.createClass({
    getTabsView: function() {
        var self = this;

        return this.props.tabs.map(function(tab) {
            var text = tab.caption,
                classes = ['switcher__tab'];

            if (tab.to === self.props.activeTab) {
                classes.push('switcher__tab_active');
            } else {
                text = <Link className="switcher__tab-link" to={ tab.to }>{ text }</Link>;
            }

            return <li key={ tab.to } className={ classes.join(' ') }>{ text }</li>;
        });
    },

    render: function() {
        var classes = [ 'switcher' ].concat(this.props.mix);

        return (
            <div className={ classes.join(' ') }>
                <ul className="switcher__tabs">
                    { this.getTabsView() }
                </ul>
                <div className="switcher__content">
                    { this.props.children }
                </div>
            </div>
        );
    }
});

module.exports = Switcher;
