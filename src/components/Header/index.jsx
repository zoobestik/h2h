import { inject, observer } from 'mobx-react';
import Header from './component';

const stores2props = ({ userInfo }) => ({
    isAuth: userInfo.isAuth,
});

export default inject(stores2props)(observer(Header));
