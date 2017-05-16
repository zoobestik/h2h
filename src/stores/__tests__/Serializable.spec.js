/* eslint-env mocha */
import { expect } from 'chai';
import { spy } from 'sinon';
import { observe, isAction, isObservable } from 'mobx';
import Serializable from '../Serializable';

describe('Serializable', () => {
    describe('constructor', () => {
        const checkProps = store => {
            expect(isObservable(store, 'data')).to.equal(true);
            expect(isAction(store.set)).to.equal(true);
        };

        it('by default', () => {
            const store = new Serializable();
            checkProps(store);
            expect(store.data).to.deep.equal({});
        });

        it('with arg', () => {
            const store = new Serializable({ uid: 100 });
            checkProps(store);
            expect(store.get('uid')).to.equal(100);
        });
    });

    it('get', () => {
        let store;

        store = new Serializable();
        expect(store.get('uid')).to.equal(undefined);

        store = new Serializable({ uid: 100 });
        expect(store.get('uid')).to.equal(100);
    });

    it('set', () => {
        const change = spy();
        const store = new Serializable({ uid: 100 });
        const disposer = observe(store.data, change);

        store.set('uid', 200);
        expect(store.get('uid')).to.equal(200);

        store.data.uid = 300;
        expect(store.get('uid')).to.equal(300);

        disposer();

        expect(change.callCount).to.equal(2);

        const firstChange = change.args[0][0];
        expect(firstChange.name).to.equal('uid');
        expect(firstChange.newValue).to.equal(200);

        const secondChange = change.args[1][0];
        expect(secondChange.name).to.equal('uid');
        expect(secondChange.newValue).to.equal(300);
    });
});
