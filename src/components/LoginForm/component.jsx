import { PropTypes } from 'react';
import bem from 'bem-cn';
import { purify } from 'app/lib/decorators';
import Form from 'components/Form';

const block = bem('login-form');

const LoginForm = ({ className, id, isLoading, password, onId, onPassword, ...props }) => (
    <Form method="post" { ...props } className={ block.mix(className) }>
        <label>
            Login
            <input name="id" type="text" onChange={ onId } value={ id }/>
        </label>
        <label>
            Password
            <input name="password" type="password" onChange={ onPassword } value={ password }/>
        </label>
        <button type="submit" disabled={ isLoading }>login</button>
    </Form>
);


LoginForm.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    password: PropTypes.string,
    onId: PropTypes.func,
    onPassword: PropTypes.func,
};

export default purify(LoginForm);
