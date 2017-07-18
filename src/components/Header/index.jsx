import { inject, observer } from 'mobx-react';
import Header from './component';

const stores2props = ({ auth }) => ({
    isAuth: auth.isAuth,
});

const HeaderSmart = props => <Header { ...props }/>;

export default inject(stores2props)(observer(HeaderSmart));
