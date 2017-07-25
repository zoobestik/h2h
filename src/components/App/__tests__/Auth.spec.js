/* eslint-env jest */
import { isComputed, isObservable } from 'mobx';
import UserStore from 'app/stores/User';
import AuthStore from '../stores/Auth';

jest.mock('app/api/auth');
import { login } from 'app/api/auth';

describe('AuthStore', () => {
    const currentUser = () => ({ uid: 0, props: { xxx: 1 } });
    const nextUser = () => ({ uid: 100, login: 'test' });
    const getAuth = () => ({ crc: '123', user: currentUser() });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('constructor', () => {
        it('with default state', () => {
            const store = new AuthStore();

            expect(store.crc).toBe(null);
            expect(isObservable(store, 'crc')).toBe(true);

            expect(store.user).toEqual(null);
            expect(isObservable(store, 'user')).toBe(true);

            expect(store.isAuth).toBe(false);
            expect(isComputed(store, 'isAuth')).toBe(true);
        });

        it('with args', () => {
            const store = new AuthStore(getAuth());
            expect(store.crc).toEqual(getAuth().crc);
            expect(store.user).toEqual(new UserStore(getAuth().user));
            expect(store.valueOf()).toEqual(getAuth());
        });

        it('should be immutable', () => {
            const data = getAuth();
            const store = new AuthStore(data);

            store.crc = 'bar';
            store.user = nextUser();

            expect(store.crc).toBe('bar');
            expect(store.user).toEqual(new UserStore(nextUser()));

            expect(data.crc).toBe(getAuth().crc);
            expect(data.user).toEqual(getAuth().user);
        });
    });

    it('isAuth', () => {
        const store = new AuthStore();

        expect(store.isAuth).toBe(false);

        store.user = currentUser();

        expect(store.isAuth).toBe(true);
        expect((new AuthStore(getAuth())).isAuth).toBe(true);
    });


    it('login', async () => {
        const store = new AuthStore();
        const query = { foo: 'bar' };

        login.mockReturnValueOnce(Promise.resolve(getAuth()));

        await expect(store.login(query)).resolves.toEqual(getAuth());
        expect(store.user).toEqual(new UserStore(currentUser()));
        expect(login.mock.calls[0]).toEqual([query]);
    });
});
