'use strict';
var React = require('react'),
    b = require('bem-cn')('switcher'),
    Link = require('react-router').Link;

module.exports = React.createClass({
    getTabsView: function() {
        var self = this;

        return this.props.tabs.map(function(tab) {
            var mods = {},
                text = tab.caption;

            if (tab.to === self.props.activeTab) {
                mods.active = true;
            } else {
                text = <Link className={ b('tab-link') } to={ tab.to }>{ text }</Link>;
            }

            return <li key={ tab.to } className={ b('tab', mods) }>{ text }</li>;
        });
    },

    render: function() {
        return (
            <div className={ b.mix(this.props.mix) }>
                <ul className={ b('tabs') }>
                    { this.getTabsView() }
                </ul>
                <div className={ b('content') }>
                    { this.props.children }
                </div>
            </div>
        );
    }
});
