import { inject, observer } from 'mobx-react';
import Header from './component';

const stores2props = ({ auth }) => ({
    isAuth: auth.isAuth,
});

export default inject(stores2props)(observer(Header));
