import { inject, observer, PropTypes } from 'mobx-react';
import Header from './component';

const HeaderSmart = ({ userInfo, ...props }) => <Header isAuth={ userInfo.isAuth } { ...props }/>;

HeaderSmart.propTypes = {
    userInfo: PropTypes.objectOrObservableObject,
};

export default inject('userInfo')(observer(HeaderSmart));
