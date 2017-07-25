/* eslint-env jest */
jest.mock('components/App/stores/Auth');
import AuthStore from 'components/App/stores/Auth';
jest.mock('components/App/stores/Page');
import PageStore from 'components/App/stores/Page';
import AppStore from '../stores/App';

describe('AppStore', () => {
    const getAuth = () => ({ props: 1 });
    const getPage = () => ({ props: 2 });
    const getApp = () => ({ auth: getAuth(), page: getPage() });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('constructor', () => {
        it('with default state', () => {
            const store = new AppStore();

            expect(store.auth).toBeInstanceOf(AuthStore);
            expect(store.page).toBeInstanceOf(PageStore);
            expect(AuthStore.mock.calls[0]).toEqual([undefined]);
            expect(PageStore.mock.calls[0]).toEqual([undefined]);

            expect(store.valueOf()).toEqual({ auth: undefined, page: undefined });
            expect(AuthStore.mock.instances[0].valueOf.mock.calls.length).toEqual(1);
            expect(PageStore.mock.instances[0].valueOf.mock.calls.length).toEqual(1);
        });

        it('with args', () => {
            const store = new AppStore(getApp());

            expect(store.auth).toBeInstanceOf(AuthStore);
            expect(store.page).toBeInstanceOf(PageStore);

            expect(AuthStore.mock.calls[0]).toEqual([getAuth()]);
            expect(PageStore.mock.calls[0]).toEqual([getPage()]);

            expect(store.valueOf()).toEqual({ auth: undefined, page: undefined });
            expect(AuthStore.mock.instances[0].valueOf.mock.calls.length).toEqual(1);
            expect(PageStore.mock.instances[0].valueOf.mock.calls.length).toEqual(1);
        });
    });
});
