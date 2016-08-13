import block from 'bem-cn';
import { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

export const b = block('button');

const Button = ({ className, href, type, ...props }) => {
    const isLink = Boolean(href);
    const Tag = isLink ? Link : 'button';
    const buttonType = !isLink && typeof type !== 'string' ? 'button' : null;
    const to = isLink ? href : null;

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
