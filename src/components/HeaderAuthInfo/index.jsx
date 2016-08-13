import { inject, observer, PropTypes } from 'mobx-react';
import HeaderAuthInfo from './component';

const HeaderAuthInfoSmart = ({ userInfo }) => (
    <HeaderAuthInfo { ...userInfo.user }/>
);

HeaderAuthInfoSmart.propTypes = {
    userInfo: PropTypes.objectOrObservableObject,
};

export default inject('userInfo')(observer(HeaderAuthInfoSmart));
