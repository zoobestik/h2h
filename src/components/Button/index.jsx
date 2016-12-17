import block from 'bem-cn';
import { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

export const b = block('button');

const Button = ({ className, type, ...props }) => {
    let buttonType;
    let Tag = 'button';

    if (props.href || props.to) {
        Tag = Link;
    } else {
        buttonType = type === undefined ? 'button' : type;
    }

    return <Tag { ...props } className={ b.mix(className) } type={ buttonType }/>;
};

Button.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),

    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),

    href: PropTypes.string,
    type: PropTypes.string,
};

export default Button;
