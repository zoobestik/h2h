import ReactPropTypes from 'prop-types';
import { inject, observer, PropTypes } from 'mobx-react';
import HeaderAuthInfo from './component';

const stores2props = ({ auth }) => ({
    user: auth.user,
    login: auth.userInfo.displayLogin,
});

const HeaderAuthInfoSmart = ({ user, login }) => (
    <HeaderAuthInfo { ...user } login={ login }/>
);

HeaderAuthInfoSmart.propTypes = {
    user: PropTypes.objectOrObservableObject.isRequired,
    login: ReactPropTypes.string,
};

export default inject(stores2props)(
    observer(HeaderAuthInfoSmart)
);
