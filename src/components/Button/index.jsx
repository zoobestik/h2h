import block from 'bem-cn';
import { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

export const b = block('button');

const Button = ({ className, href, type, ...props }) => {
    let to;
    let buttonType;
    let Tag = 'button';

    if (href) {
        Tag = Link;
        to = href;
    } else {
        buttonType = type === undefined ? 'button' : type;
    }

    return <Tag { ...props } className={ b.mix(className) } type={ buttonType } to={ to }/>;
};

Button.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    href: PropTypes.string,
    type: PropTypes.string,
};

export default Button;
