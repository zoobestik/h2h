/* eslint-env jest */
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
            expect(page.title).toBe('');
            expect(page.main).toBe(null);
            expect(page.valueOf()).toEqual({ title: '', main: null });
        });

        it('by constructor', () => {
            const state = {
                main: ok,
                title: ok,
            };

            page = new Page(state);

            expect(page.main).toBe(ok);
            expect(page.title).toBe(ok);
            expect(page.valueOf()).toEqual(state);
        });

        it('some props should be observable', () => {
            expect(isObservable(page, 'title')).toBe(true);
        });
    });
});
