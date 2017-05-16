/* eslint-env mocha */
import { expect } from 'chai';
import { isComputed } from 'mobx';
import UserStore from '../User';

describe('UserStore', () => {
    it('displayLogin', () => {
        const userDefault = new UserStore({ uid: 100 });
        expect(userDefault.displayLogin).to.equal('uid100');
        expect(isComputed(userDefault, 'displayLogin')).to.equal(true);

        const userWithLogin = new UserStore({ uid: 100, login: 'test' });
        expect(userWithLogin.displayLogin).to.equal('test');
        expect(isComputed(userWithLogin, 'displayLogin')).to.equal(true);
    });
});
