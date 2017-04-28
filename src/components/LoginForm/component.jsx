import block from 'bem-cn';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'components/Form';

const b = block('login-form');

export default class LoginForm extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        id: PropTypes.string,
        isLoading: PropTypes.bool,
        password: PropTypes.string,
        onId: PropTypes.func,
        onPassword: PropTypes.func,
    };

    render() {
        const { className, id, isLoading, password, onId, onPassword, ...props } = this.props;
        return (
            <Form method="post" { ...props } className={ b.mix(className)() }>
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
    }
}
