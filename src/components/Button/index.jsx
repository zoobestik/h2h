import block from 'bem-cn';
import { PureComponent, PropTypes } from 'react';
import Link from 'react-router/lib/Link';

export const b = block('button');

export default class Button extends PureComponent {
    static propTypes = {
        className: PropTypes.string,

        to: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),

        href: PropTypes.string,
        type: PropTypes.string,
    };

    render() {
        let buttonType;
        let Tag = 'button';
        const { className, type, href, to, ...props } = this.props;

        if (href || to) {
            Tag = Link;
        } else {
            buttonType = type === undefined ? 'button' : type;
        }

        return <Tag { ...props } className={ b.mix(className)() } type={ buttonType } href={ href } to={ to }/>;
    }
}
