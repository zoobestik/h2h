/* eslint-env mocha */
import { expect } from 'chai';
import { isObservable, isAction } from 'mobx';
import Page from '../page';

describe('page', () => {
    const ok = 'ok';

    describe('should correct init data', () => {
        it('by default', () => {
            const page = new Page();

            expect(page.crc).to.equal('');
            expect(page.title).to.equal('');
        });

        it('by constructor', () => {
            const page = new Page({
                crc: ok,
                title: ok,
            });

            expect(page.crc).to.equal(ok);
            expect(page.title).to.equal(ok);
        });
    });

    describe('merge', () => {
        it('should not be updated random value', () => {
            const page = new Page();
            const prop = '__test__foobar__';

            page.merge({
                crc: ok,
                [prop]: ok,
            });

            expect(page[prop]).to.not.equal(ok);
            expect(page.crc).to.equal(ok);
        });

        it('should not be correct step-by-step merge', () => {
            const page = new Page();

            page.merge({ crc: ok });

            expect(page.crc).to.equal(ok);
            expect(page.title).to.equal('');

            page.merge({ title: ok });

            expect(page.crc).to.equal(ok);
            expect(page.title).to.equal(ok);
        });

        it('should not update by void data', () => {
            const page1 = new Page();
            const page2 = new Page();

            expect(page1.merge()).to.deep.equal(page2);
            expect(page1).to.deep.equal(page2);
        });

        it('some props should be observable', () => {
            const page = new Page();

            expect(isObservable(page, 'crc')).to.equal(true);
            expect(isObservable(page, 'title')).to.equal(true);
            expect(isAction(page.merge)).to.equal(true);
        });
    });
});
