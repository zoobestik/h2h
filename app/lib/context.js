'use strict';

class Context {

    getStore(id) {
        let store =  this.stores.get(id);

        if ( ! store) {
            const Store = require('app/stores/' + id);

            store = new Store(this);

            this.stores.set(id, store);
        }

        return store;
    }

    get stores() {
        return this._stores || (this._stores = new Map());
    }

    serialize() {
        const result = {};

        this.stores.forEach(function(store, id) {
            result[id] = store.getState();
        });

        return result;
    }
}

module.exports = Context;