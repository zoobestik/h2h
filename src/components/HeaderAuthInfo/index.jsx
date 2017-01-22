import { inject, observer, PropTypes } from 'mobx-react';
import HeaderAuthInfo from './component';

const stores2props = ({ userInfo }) => ({
    user: userInfo.user,
});

const HeaderAuthInfoSmart = ({ user }) => (
    <HeaderAuthInfo { ...user }/>
);

HeaderAuthInfoSmart.propTypes = {
    user: PropTypes.objectOrObservableObject,
};

export default inject(stores2props)(
    observer(HeaderAuthInfoSmart)
);
