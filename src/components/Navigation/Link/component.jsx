import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { itemLinkClass } from 'components/Navigation';

export default class NavigationLink extends PureComponent {
    static propTypes = {
        to: PropTypes.string.isRequired,
        isActive: PropTypes.bool,
        isCurrent: PropTypes.bool,
        children: PropTypes.node,
    };

    render() {
        const { to, isActive, isCurrent, children, ...props } = this.props;
        return (
            <a
                { ...props }
                className={ itemLinkClass({ active: Boolean(isActive) })() }
                href={ isCurrent ? null : to }
            >
                { children }
            </a>
        );
    }
}
