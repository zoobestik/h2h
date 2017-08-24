import { inject, observer, PropTypes } from 'mobx-react';
import HeaderAuthInfo from './component';

const stores2props = ({ store }) => ({
    user: store.user,
});

const HeaderAuthInfoSmart = ({ user }) => (
    <HeaderAuthInfo { ...user } login={ user.displayLogin }/>
);

HeaderAuthInfoSmart.propTypes = {
    user: PropTypes.objectOrObservableObject.isRequired,
};

export default inject(stores2props)(
    observer(HeaderAuthInfoSmart)
);
