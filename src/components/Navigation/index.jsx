import block from 'bem-cn';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { url } from 'app/lib';
// import NavigationLink from 'components/Navigation/Link';
import NavigationLink from 'components/Navigation/Link/component';

import './index.pcss';

export const b = block('navigation');
export const itemClass = b('item');
export const itemLinkClass = b('link');

export const items = [
    { to: url('/explore/'), children: 'Explore' },
    { to: url('/standings/'), children: 'League Table' },
    { to: url('/calendar/'), children: 'Calendar' },
    // { to: '/news/', children: 'News' },
];

export default class Navigation extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const { className } = this.props;
        return (
            <ul className={ b.mix(className)() }>
                { items.map(props => (
                    <li key={ props.to } className={ itemClass() }>
                        <NavigationLink { ...props }/>
                    </li>
                )) }
            </ul>
        );
    }
}
