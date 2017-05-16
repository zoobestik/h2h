/* eslint-env mocha */
import { beforeEach } from 'mocha';
import { expect } from 'chai';
import { isObservable } from 'mobx';
import Page from '../stores/Page';

describe('PageStore', () => {
    let page;
    const ok = 'ok';

    beforeEach(() => {
        page = new Page();
    });

    describe('should correct init data', () => {
        it('by default', () => {
            expect(page.title).to.equal('');
            expect(page.main).to.equal(null);
            expect(page.valueOf()).to.deep.equal({ title: '', main: null });
        });

        it('by constructor', () => {
            const state = {
                main: ok,
                title: ok,
            };

            page = new Page(state);

            expect(page.main).to.equal(ok);
            expect(page.title).to.equal(ok);
            expect(page.valueOf()).to.deep.equal(state);
        });

        it('some props should be observable', () => {
            expect(isObservable(page, 'title')).to.equal(true);
        });
    });
});
