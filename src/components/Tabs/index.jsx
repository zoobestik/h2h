import React, { PropTypes, PureComponent } from 'react';
import block from 'bem-cn';
import Link from 'react-router/lib/Link';

import './index.pcss';

const b = block('tabs');
const classTabs = b('tabs');
const classContent = b('content');

export default class Tabs extends PureComponent {
    static get propTypes() {
        return {
            active: PropTypes.func,
            children: PropTypes.any,
            className: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.func,
            ]),
            tabs: PropTypes.array.isRequired,
        };
    }

    getTabsView() {
        const { tabs } = this.props;

        return tabs.map(({ to, caption, active }) => (
            <li className={ b('tab', { active }) } key={ to }>{
                active ?
                    caption :
                    <Link className={ b('tab-link') } to={ to }>{ caption }</Link>
            }</li>
        ));
    }

    render() {
        const { className, children, ...props } = this.props;

        return (
            <div className={ b.mix(className) }>
                <ul className={ classTabs }>
                    { this.getTabsView(props) }
                </ul>
                <div className={ classContent }>
                    { children }
                </div>
            </div>
        );
    }
}
