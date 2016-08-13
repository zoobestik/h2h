/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import * as auth from '../../api/auth';
import UserInfo from '../userInfo';
import SingleTimeRequest from '../../models/SingleTimeRequest';

describe('userInfo', () => {
    const getAuthData = () => ({
        uid: 0,
        props: { xxx: 1 },
    });

    describe('user', () => {
        it('re-assign user', () => {
            const store = new UserInfo({ foo: 'bar' });
            store.user = getAuthData();
            expect(store.user).to.deep.equal(getAuthData());
        });

        it('re-assign to void user', () => {
            const store = new UserInfo();
            const data = store.user;

            data.foo = 'bar';

            expect(data).to.deep.equal({ foo: 'bar' });
        });

        it('immutable getter', () => {
            const data = { prop: 'foo' };
            const store = new UserInfo(data);

            store.user.prop = 'bar';

            expect(store.user.prop).to.be.equal('foo');
            expect(data).to.be.deep.equal({ prop: 'foo' });
        });

        it('immutable setter', () => {
            const data = { prop: 'foo' };
            const store = new UserInfo(data);

            data.prop = 'bar';

            expect(store.user.prop).to.be.equal('foo');
            expect(data).to.be.deep.equal({ prop: 'bar' });
        });

        it('login', () => {
            const uid = 100;
            const store = new UserInfo({ uid });

            expect(store.user.login).to.deep.equal(`uid${uid}`);

            store.user = { uid, login: 'uesr' };

            expect(store.user.login).to.deep.equal('uesr');
        });
    });

    describe('initial state', () => {
        it('by default', () => {
            const store = new UserInfo();

            expect(store.user).to.deep.equal({});
            expect(store.isAuth).to.equal(false);
            expect(store.authRequest).to.be.instanceof(SingleTimeRequest);
        });

        it('by constructor', () => {
            const store = new UserInfo(getAuthData());
            expect(store.user).to.deep.equal(getAuthData());
        });
    });

    it('get', () => {
        const store = new UserInfo(getAuthData());
        expect(store.get('uid')).to.equal(0);
    });

    it('isAuth', () => {
        const store = new UserInfo();
        expect(store.isAuth).to.equal(false);

        store.user = getAuthData();
        expect(store.isAuth).to.equal(true);
    });

    it('authorize', async () => {
        const query = { foo: 'bar' };
        const store = new UserInfo();

        sinon.stub(auth, 'login', requestQuery => {
            expect(query).to.deep.equal(requestQuery);

            return new Promise(resolve => {
                resolve(getAuthData());
            });
        });

        await store.authorize(query);
        expect(store.user).to.deep.equal(getAuthData());
    });
});
