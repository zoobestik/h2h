import block from 'bem-cn';
import { PropTypes, PureComponent } from 'react';
import { withRouter, routerShape } from 'react-router';
import Link from 'react-router/lib/Link';

import './index.pcss';

export const b = block('navigation');
export const itemClass = b('item');

export const items = [
    { to: '/', children: 'Explore' },
    { to: '/standings/', children: 'Standings' },
    { to: '/rules/', children: 'Rules' },
];

export class Navigation extends PureComponent {
    static propTypes = {
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),
        router: routerShape,
    };

    render() {
        const { className, router } = this.props;
        return (
            <ul className={ b.mix(className) }>
                { items.map(({ children, to, ...props }) => (
                    <li key={ to } className={ itemClass }>
                        <Link { ...props } to={ router.isActive(to, true) ? null : to }>{ children }</Link>
                    </li>
                )) }
            </ul>
        );
    }
}

export default withRouter(Navigation);
