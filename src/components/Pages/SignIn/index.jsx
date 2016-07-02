import userInfo from 'api/userinfo';
import Redirect from 'react-router/lib/Redirect';
import LoginForm from '../../LoginForm';

const SignIn = () => (
    userInfo.isAuth ?
        <Redirect to="/"/> :
        <LoginForm/>
);

export default SignIn;
