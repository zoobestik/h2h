import { inject, observer } from 'mobx-react';
import SignIn from './component';

export default inject('userInfo')(observer(
    ({ userInfo }) => <SignIn isAuth={ userInfo.isAuth }/>
));
