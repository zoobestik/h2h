import block from 'bem-cn';
import { PropTypes, PureComponent } from 'react';

import HeaderSignIn from 'components/HeaderSignIn';
import HeaderAuthInfo from 'components/HeaderAuthInfo';
import MainMenu from 'components/Navigation';

import './index.pcss';

export const b = block('header');
export const logoClass = b('logo');
export const wrapperClass = b('wrapper');
export const navigationClass = b('navigation');
export const mainMenuClass = b('main-menu');
export const userInfoClass = b('user-info');
export const bottomLineClass = b('line');

export default class Header extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        isAuth: PropTypes.bool,
    };

    render() {
        const { className, isAuth } = this.props;
        const LoginInfo = isAuth ? HeaderAuthInfo : HeaderSignIn;

        return (
            <header className={ b.mix(className)() }>
                <div className={ wrapperClass() }>
                    <p className={ logoClass() }>H2H Logo</p>
                    <nav className={ navigationClass() }>
                        <MainMenu className={ mainMenuClass() }/>
                        <LoginInfo className={ userInfoClass() }/>
                    </nav>
                </div>
                <hr className={ bottomLineClass({ top: true })() }/>
            </header>
        );
    }
}
