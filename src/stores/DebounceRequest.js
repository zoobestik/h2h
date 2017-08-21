import { action, computed, observable } from 'mobx';
import { generateId } from 'app/lib';

export default class DebounceRequest {
    @observable defer = null;

    constructor(cb) {
        this.cb = cb;
    }

    @action.bound
    readyRequest() {
        const cb = this.cb;
        if (cb) cb(Promise.resolve(this.defer.promise));
        this.defer = null;
    }

    createDefer(request, args) {
        const defer = {
            arguments: [request, args],
            promise: null,
            resolve: null,
            reject: null,
        };

        defer.promise = new Promise((resolve, reject) => {
            defer.resolve = resolve;
            defer.reject = reject;
        });

        defer.promise.then(this.readyRequest, this.readyRequest);

        return defer;
    }

    onResponse(requestId, actionName) {
        return response => {
            if (requestId === this.id) {
                this.defer[actionName](response);
            }
        };
    }

    @computed get isProgress() {
        return Boolean(this.defer);
    }

    @action
    create(...args) {
        const id = generateId();
        let defer = this.defer;

        if (!defer) {
            defer = this.createDefer(...args);
            this.defer = defer;
        }

        const [request, data] = args;

        request(data)
            .then(this.onResponse(id, 'resolve'))
            .catch(this.onResponse(id, 'reject'));

        this.id = id;

        return defer.promise;
    }
}
