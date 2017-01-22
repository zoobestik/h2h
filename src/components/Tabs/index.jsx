import block from 'bem-cn';
import React, { PropTypes, PureComponent } from 'react';
import Link from 'react-router/lib/Link';

import './index.pcss';

const b = block('tabs');
const classTabs = b('tabs');
const classTab = b('tab');
const classLink = b('tab-link');
const classContent = b('content');

export default class Tabs extends PureComponent {
    static get propTypes() {
        return {
            active: PropTypes.func,
            children: PropTypes.any,
            className: PropTypes.string,
            tabs: PropTypes.array.isRequired,
        };
    }

    getTabsView() {
        const { tabs } = this.props;

        return tabs.map(({ to, caption, isActive }) => (
            <li
                key={ to }
                className={ classTab({ active: Boolean(isActive) })() }
            >{
                isActive ?
                    caption :
                    <Link className={ classLink() } to={ to }>{ caption }</Link>
            }</li>
        ));
    }

    render() {
        const { className, children, ...props } = this.props;

        return (
            <div className={ b.mix(className)() }>
                <ul className={ classTabs() }>
                    { this.getTabsView(props) }
                </ul>
                <div className={ classContent() }>
                    { children }
                </div>
            </div>
        );
    }
}
