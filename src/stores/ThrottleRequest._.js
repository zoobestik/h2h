import { action, computed, observable } from 'mobx';
import { generateId } from 'app/lib';

export default class ThrottleRequest {
    @observable id;
    @observable defer;

    constructor() {
        this.reset();
    }

    @action reset() {
        this.id = null;
        this.defer = null;
    }

    @computed get isProgress() {
        return Boolean(this.defer);
    }

    @action createRequest() {
        if (!this.id) {
            const defer = {};

            defer.promise = new Promise((resolve, reject) => {
                defer.resolve = resolve;
                defer.reject = reject;
            });

            this.defer = defer;
        }

        return (this.id = generateId());
    }

    processRequest(requestId, actionName) {
        return response => {
            if (requestId === this.id) {
                this.defer[actionName](response);
            }
        };
    }

    createExecutor(fn) {
        return (...args) => this.send(fn(...args));
    }

    send(request, ...args) {
        const prevId = this.id;
        const id = this.createRequest(request, args);
        const promise = this.defer.promise;

        if (prevId !== id) {
            promise
                .then(this.processRequest(id, 'resolve'))
                .catch(this.processRequest(id, 'reject'));
        }

        return promise;
    }
}

export const create = fn => new ThrottleRequest().createExecutor(fn);
