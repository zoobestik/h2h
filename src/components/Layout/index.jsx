import block from 'bem-cn';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

import './index.pcss';

export const b = block('layout');
export const headerClass = b('header');
export const mainClass = b('main');
export const footerClass = b('footer');

export default class Layout extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    };

    render() {
        const { className, children } = this.props;

        return (
            <div className={ b.mix(className)() }>
                <Header className={ headerClass() }/>
                <main className={ mainClass() }>{ children }</main>
                <Footer className={ footerClass() }/>
            </div>
        );
    }
}
