import { inject, observer } from 'mobx-react';
import Header from './component';

const stores2props = ({ store: { user } }) => ({
    isAuth: Boolean(user),
});

const HeaderSmart = props => <Header { ...props }/>;

export default inject(stores2props)(
    observer(HeaderSmart)
);
