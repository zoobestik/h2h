/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';

class FakeStore {
    constructor(data) {
        this.data = { ...(data || {}) };
    }

    valueOf() {
        return this.data;
    }
}

class AuthStore extends FakeStore {}
class PageStore extends FakeStore {}

const AppStore = global.componentWithMocks(`${__dirname}/../stores/App`, {
    'components/App/stores/Auth': AuthStore,
    'components/App/stores/Page': PageStore,
});

describe('AppStore', () => {
    const getAuth = () => ({ props: 1 });
    const getPage = () => ({ props: 2 });

    const getApp = () => ({
        auth: getAuth(),
        page: getPage(),
    });

    let sandbox = null;

    afterEach(() => {
        if (sandbox) {
            if (!Array.isArray(sandbox)) sandbox = [sandbox];
            sandbox.forEach(item => {
                item.restore();
            });
        }
    });

    describe('constructor', () => {
        it('with default state', () => {
            const store = new AppStore();

            expect(store.auth).to.instanceOf(AuthStore);
            expect(store.auth.data).to.deep.equals({});

            expect(store.page).to.instanceOf(PageStore);
            expect(store.page.data).to.deep.equals({});

            expect(store.valueOf()).to.deep.equal({
                auth: {},
                page: {},
            });
        });

        it('with args', () => {
            sandbox = [
                sinon.stub(PageStore.prototype, 'constructor').callsFake(data => {
                    expect(getPage()).to.deep.equal(data);
                    return data;
                }),

                sinon.stub(AuthStore.prototype, 'constructor').callsFake(data => {
                    expect(getAuth()).to.deep.equal(data);
                    return data;
                }),
            ];

            const store = new AppStore(getApp());
            expect(store.crc).to.deep.equal(getAuth().crc);
            expect(store.user).to.deep.equal(getAuth().user);
            expect(store.valueOf()).to.deep.equal(getApp());
        });
    });
});
