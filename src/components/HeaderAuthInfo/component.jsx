import { PureComponent, PropTypes } from 'react';
import block from 'bem-cn';

export const b = block('header-auth-info');

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
        avatarUrl: '/',
    };

    render() {
        const { className, login, avatarUrl } = this.props;
        return (
            <div className={ b.mix(className) }>
                { login }
                <img alt={ `${login} avatar` } src={ avatarUrl }/>
            </div>
        );
    }
}
