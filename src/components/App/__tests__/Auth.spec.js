/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import { isComputed, isObservable } from 'mobx';
import * as auth from 'app/api/auth';
import UserStore from 'app/stores/User';
import AuthStore from '../stores/Auth';

describe('AuthStore', () => {
    const getUser = () => ({
        uid: 0,
        props: { xxx: 1 },
    });

    const getAuth = () => ({
        crc: '123',
        user: getUser(),
    });

    const newUser = () => ({
        uid: 100,
        login: 'test',
    });

    let sandbox = null;

    afterEach(() => {
        if (sandbox) sandbox.restore();
    });

    describe('constructor', () => {
        it('with default state', () => {
            const store = new AuthStore();

            expect(store.crc).to.equal(null);
            expect(isObservable(store, 'crc')).to.equal(true);

            expect(store.user).to.deep.equal(null);
            expect(isObservable(store, 'user')).to.equal(true);

            expect(store.isAuth).to.equal(false);
            expect(isComputed(store, 'isAuth')).to.equal(true);
        });

        it('with args', () => {
            const store = new AuthStore(getAuth());
            expect(store.crc).to.deep.equal(getAuth().crc);
            expect(store.user).to.deep.equal(new UserStore(getAuth().user));
            expect(store.valueOf()).to.deep.equal(getAuth());
        });


        it('should be immutable', () => {
            const data = getAuth();
            const store = new AuthStore(data);

            store.crc = 'bar';
            store.user = newUser();

            expect(store.crc).to.be.equal('bar');
            expect(store.user).to.be.deep.equal(new UserStore(newUser()));

            expect(data.crc).to.be.equal(getAuth().crc);
            expect(data.user).to.be.deep.equal(getAuth().user);
        });
    });

    it('isAuth', () => {
        const store = new AuthStore();

        expect(store.isAuth).to.equal(false);

        store.user = getUser();

        expect(store.isAuth).to.equal(true);
        expect((new AuthStore(getAuth())).isAuth).to.equal(true);
    });


    it('login', async () => {
        const store = new AuthStore();
        const query = { foo: 'bar' };

        sandbox = sinon.stub(auth, 'login').callsFake(async requestQuery => {
            expect(query).to.deep.equal(requestQuery);
            return getAuth();
        });

        await store.login(query);
        expect(store.user).to.deep.equal(new UserStore(getUser()));
    });
});
