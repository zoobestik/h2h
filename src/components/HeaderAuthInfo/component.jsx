import { PureComponent, PropTypes } from 'react';
import block from 'bem-cn';

import './index.pcss';

const defaultUserIcon = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%' +
    '3D%2226%22%20height%3D%2226%22%20viewBox%3D%220%200%2026%2026%22%3E%3Cpath%20d%3D%22M16.6%2015.9c-0.2-0.1-1.2-0.' +
    '5-0.5-2.4h0c1.6-1.7%202.9-4.4%202.9-7.1%200-4.1-2.7-6.3-5.9-6.3%20-3.2%200-5.9%202.2-5.9%206.3%200%202.7%201.2%2' +
    '05.4%202.9%207.1%200.6%201.7-0.5%202.3-0.7%202.4C5.9%2017.1%202%2019.3%202%2021.5c0%200.6%200%200.2%200%200.8%20' +
    '0%202.9%205.7%203.6%2011%203.6%205.3%200%2010.9-0.7%2010.9-3.6%200-0.6%200-0.2%200-0.8C24%2019.2%2020.1%2017.1%2' +
    '016.6%2015.9z%22%2F%3E%3C%2Fsvg%3E';

export const b = block('header-auth-info');
export const classAvatar = b('avatar');

export default class HeaderAuthInfo extends PureComponent {
    static propTypes = {
        avatarUrl: PropTypes.string,
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),
        login: PropTypes.string.isRequired,
    };

    static defaultProps = {
        avatarUrl: defaultUserIcon,
    };

    render() {
        const { className, login, avatarUrl } = this.props;
        return (
            <div className={ b.mix(className) }>
                { login }
                <img className={ classAvatar } alt={ `${login} avatar` } src={ avatarUrl } height="30" width="30"/>
            </div>
        );
    }
}
