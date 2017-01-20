/* eslint-env mocha */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Link from 'react-router/lib/Link';

const Button = props => <button { ...props }/>;

const HeaderSignIn = global.componentWithMocks(`${__dirname}/..`, {
    '../Button': Button,
});

describe('HeaderSignIn', () => {
    it('default', () => {
        const header = shallow(<HeaderSignIn className="some-random-class"/>);
        expect(header.html()).to.equal('<div class="header-sign-in some-random-class">' +
            '<button href="/login/">' +
                'Sign In <img alt="sign in icon" src="/img/sign-in.svg" height="32" width="32"/>' +
            '</button>' +
        '</div>');
    });

    it('link is Router Link', () => {
        const header = shallow(<HeaderSignIn className="some-random-class"/>);
        expect(header.contains(<Link to="/login/">...</Link>)).to.equal(true);
    });
});
