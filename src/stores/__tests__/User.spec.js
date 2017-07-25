/* eslint-env jest */
import { isComputed } from 'mobx';
import UserStore from '../User';

describe('UserStore', () => {
    it('displayLogin', () => {
        const userDefault = new UserStore({ uid: 100 });
        expect(userDefault.displayLogin).toBe('uid100');
        expect(isComputed(userDefault, 'displayLogin')).toBe(true);

        const userWithLogin = new UserStore({ uid: 100, login: 'test' });
        expect(userWithLogin.displayLogin).toBe('test');
        expect(isComputed(userWithLogin, 'displayLogin')).toBe(true);
    });
});
