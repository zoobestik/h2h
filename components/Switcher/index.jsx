'use strict';

const React = require('react');
const b = require('bem-cn')('switcher');
const Link = require('react-router').Link;

class Switcher extends React.Component {
    static get propTypes() {
        return {
            children: React.PropTypes.any.isRequired,
            mix: React.PropTypes.any, // TODO: Array or Object
            tabs: React.PropTypes.array.isRequired,
        };
    }

    getTabsView() {
        const self = this;

        return this.props.tabs.map(function(tab) {
            const mods = {};

            let text = tab.caption;

            if (tab.to === self.props.activeTab) {
                mods.active = true;
            }
            else {
                text = <Link className={ b('tab-link') } to={ tab.to }>{ text }</Link>;
            }

            return (
                <li className={ b('tab', mods) } key={ tab.to }>{ text }</li>
            );
        });
    }

    render() {
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
}

module.exports = Switcher;
