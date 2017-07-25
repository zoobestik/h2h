/* eslint-env jest */
import { observe, isAction, isObservable } from 'mobx';
import Serializable from '../Serializable';

describe('Serializable', () => {
    describe('constructor', () => {
        const checkProps = store => {
            expect(isObservable(store, 'data')).toBe(true);
            expect(isAction(store.set)).toBe(true);
        };

        it('by default', () => {
            const store = new Serializable();
            checkProps(store);
            expect(store.data).toEqual({});
        });

        it('with arg', () => {
            const store = new Serializable({ uid: 100 });
            checkProps(store);
            expect(store.get('uid')).toBe(100);
        });
    });

    it('get', () => {
        let store;

        store = new Serializable();
        expect(store.get('uid')).toBe(undefined);

        store = new Serializable({ uid: 100 });
        expect(store.get('uid')).toBe(100);
    });

    it('set', () => {
        const change = spy();
        const store = new Serializable({ uid: 100 });
        const disposer = observe(store.data, change);

        store.set('uid', 200);
        expect(store.get('uid')).toBe(200);

        store.data.uid = 300;
        expect(store.get('uid')).toBe(300);

        disposer();

        expect(change.callCount).toBe(2);

        const firstChange = change.args[0][0];
        expect(firstChange.name).toBe('uid');
        expect(firstChange.newValue).toBe(200);

        const secondChange = change.args[1][0];
        expect(secondChange.name).toBe('uid');
        expect(secondChange.newValue).toBe(300);
    });
});
