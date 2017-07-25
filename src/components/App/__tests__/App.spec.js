/* eslint-env jest */
import AppStore from '../stores/App';
import AuthStore from '../stores/Auth';
import PageStore from '../stores/Page';

describe('AppStore', () => {
    const getAuth = () => ({ props: 1 });
    const getPage = () => ({ props: 2 });
    const getApp = () => ({ auth: getAuth(), page: getPage() });

    describe('constructor', () => {
        it('with default state', () => {
            const store = new AppStore();

            expect(store.auth).toBeInstanceOf(AuthStore);
            expect(store.auth.data).toEqual({});

            expect(store.page).toBeInstanceOf(PageStore);
            expect(store.page.data).toEqual({});

            expect(store.valueOf()).toEqual({ auth: {}, page: {} });
        });

        it('with args', () => {
            const store = new AppStore(getApp());
            expect(store.auth.valueOf()).toEqual(getAuth());
            expect(store.page.valueOf()).toEqual(getPage());
            expect(store.valueOf()).toEqual(getApp());
        });
    });
});
