import block from 'bem-cn';
import { PropTypes } from 'react';
import { purify } from 'app/lib/decorators';
import Button from 'components/Button';

export const b = block('header-sign-in');

const HeaderSignIn = ({ className }) => (
    <div className={ b.mix(className) }>
        <Button to="/login/">
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
