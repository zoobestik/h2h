import block from 'bem-cn';
import { PropTypes } from 'react';

export const b = block('header-auth-info');

const defaultUrl = '/';

const HeaderAuthInfo = ({ className, login, avatarUrl }) => (
    <div className={ b.mix(className) }>
        { login }
        <img alt={ `${login} avatar` } src={ avatarUrl || defaultUrl }/>
    </div>
);

HeaderAuthInfo.propTypes = {
    avatarUrl: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    login: PropTypes.string.isRequired,
};

export default HeaderAuthInfo;
