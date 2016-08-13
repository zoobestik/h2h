import block from 'bem-cn';
import { PropTypes } from 'react';
import { purify } from '../../lib/decorators';
import Button from '../Button';

export const b = block('header-sign-in');

const HeaderSignIn = ({ className }) => (
    <div className={ b.mix(className) }>
        <Button href="/login/">
            Sign In <img alt="sign in icon" src="/img/sign-in.svg" height="32" width="32"/>
        </Button>
    </div>
);

HeaderSignIn.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
};

export default purify(HeaderSignIn);