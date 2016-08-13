import block from 'bem-cn';
import { PropTypes, PureComponent } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './index.pcss';

export const b = block('layout');
export const headerClass = b('header');
export const mainClass = b('main');
export const footerClass = b('footer');

export default class Layout extends PureComponent {
    static propTypes = {
        className: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),
        children: PropTypes.node,
    };

    render() {
        const { className, children } = this.props;

        return (
            <div className={ b.mix(className) }>
                <Header className={ headerClass }/>
                <main className={ mainClass }>{ children }</main>
                <Footer className={ footerClass }/>
            </div>
        );
    }
}
