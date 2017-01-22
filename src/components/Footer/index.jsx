import block from 'bem-cn';
import { PropTypes, PureComponent } from 'react';

import './index.pcss';

export const b = block('footer');
export const yearsClass = b('years');
export const sourceClass = b('source');

export default class Footer extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const { className } = this.props;

        return (
            <footer className={ b.mix(className)() }>
                <p className={ yearsClass() }>© 2014 – 2015</p>
                <p className={ sourceClass() }>
                    Fork me on <a target="_blank" rel="noopener noreferrer" href="https://github.com/zoobestik/h2h">
                        github.com
                    </a>
                </p>
            </footer>
        );
    }
}
