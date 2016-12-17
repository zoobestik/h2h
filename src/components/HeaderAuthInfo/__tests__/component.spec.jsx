/* eslint-env mocha */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HeaderAuthInfo from '../component';

describe('HeaderAuthInfo', () => {
    it('default', () => {
        const header = shallow(<HeaderAuthInfo className="some-random-class" login="user"/>);
        expect(header.html()).to.equal('<div class="header-auth-info some-random-class">' +
            'user' +
            '<img alt="user avatar" src="/"/>' +
        '</div>');
    });

    it('with @avatarUrl', () => {
        const header = shallow(<HeaderAuthInfo login="user" avatarUrl="/user"/>);
        expect(header.html()).to.equal('<div class="header-auth-info">' +
            'user' +
            '<img alt="user avatar" src="/user"/>' +
        '</div>');
    });
});
