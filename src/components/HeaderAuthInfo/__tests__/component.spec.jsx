/* eslint-env mocha */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HeaderAuthInfo from '../component';

describe('HeaderAuthInfo', () => {
    it('default', () => {
        const header = shallow(<HeaderAuthInfo className="some-random-class" login="user"/>);
        expect(header.html()).to.equal('<div class="header-auth-info some-random-class">' +
            'user' +
            '<img class="header-auth-info__avatar" alt="user avatar" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%2' +
            '2http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2226%22%20viewBox%3D%220%200%202' +
            '6%2026%22%3E%3Cpath%20d%3D%22M16.6%2015.9c-0.2-0.1-1.2-0.5-0.5-2.4h0c1.6-1.7%202.9-4.4%202.9-7.1%200-4.1' +
            '-2.7-6.3-5.9-6.3%20-3.2%200-5.9%202.2-5.9%206.3%200%202.7%201.2%205.4%202.9%207.1%200.6%201.7-0.5%202.3-' +
            '0.7%202.4C5.9%2017.1%202%2019.3%202%2021.5c0%200.6%200%200.2%200%200.8%200%202.9%205.7%203.6%2011%203.6%' +
            '205.3%200%2010.9-0.7%2010.9-3.6%200-0.6%200-0.2%200-0.8C24%2019.2%2020.1%2017.1%2016.6%2015.9z%22%2F%3E%' +
            '3C%2Fsvg%3E" height="30" width="30"/>' +
        '</div>');
    });

    it('with @avatarUrl', () => {
        const header = shallow(<HeaderAuthInfo login="user" avatarUrl="/user"/>);
        expect(header.html()).to.equal('<div class="header-auth-info">' +
            'user' +
            '<img class="header-auth-info__avatar" alt="user avatar" src="/user" height="30" width="30"/>' +
        '</div>');
    });
});
