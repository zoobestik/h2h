import bem from 'bem-cn';
import { PropTypes } from 'react';
import { compose } from 'redux';
import { classify, purify } from '../../lib/decorators';

import './index.pcss';

export const block = bem('layout');
export const layoutLine = block('line');
export const layoutMain = block('main');

export const headerBem = bem('header');
export const headerLogo = headerBem('logo');
export const headerNav = headerBem('nav');
export const headerUserInfo = headerBem('userinfo');

export const navigationBem = bem('navigation');
export const navigationItem = navigationBem('item');

export const signInBem = bem('sign-in');
export const signInLink = navigationBem('link');
export const signInHelp = navigationBem('help');

export const footerBem = bem('footer');
export const footerYears = footerBem('years');
export const footerSource = footerBem('source');
export const footerAuthor = footerBem('author');

const Layout = ({ className, isCentred, children }) => (
    <div className={ className }>
        <header>
            <section className={ headerBem }>
                <div className={ headerLogo }>H2H Logo</div>
                <nav>
                    <ul className={ navigationBem.mix(headerNav) }>
                        <li className={ navigationItem }><a href="/">Explore</a></li>
                        <li className={ navigationItem }><a href="/league">League Table</a></li>
                        <li className={ navigationItem }><a href="/calendar">Calendar</a></li>
                        <li className={ navigationItem }><a href="/blog">Blog</a></li>
                    </ul>
                </nav>
                <div className={ signInBem.mix(headerUserInfo) }>
                    <a className={ signInLink }>
                        sign-in
                        <img className={ signInHelp } src="" alt="help"/>
                    </a>
                </div>
            </section>
            <hr className={ layoutLine({ top: true }) }/>
        </header>
        <main
            className={ layoutMain({
                center: isCentred,
                middle: isCentred,
            }) }
        >
            { children }
        </main>
        <footer className={ footerBem }>
            <p className={ footerYears }>© 2014–2015</p>
            <p className={ footerSource }>
                Fork me on <a target="_blank" rel="noopener noreferrer" href="https://github.com/zoobestik/h2h">
                    github.com
                </a>
            </p>
            <p className={ footerAuthor }>
                Author: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kbchernenko">
                    zoobestik
                </a>
            </p>
        </footer>
    </div>
);

Layout.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    children: PropTypes.any,
    isCentred: PropTypes.bool,
};

export default compose(
    classify(block),
    purify,
)(Layout);
