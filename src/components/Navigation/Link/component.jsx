import { PropTypes, PureComponent } from 'react';
import Link from 'react-router/lib/Link';
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
            <Link
                { ...props }
                className={ itemLinkClass({ active: Boolean(isActive) })() }
                to={ isCurrent ? null : to }
            >
                { children }
            </Link>
        );
    }
}
