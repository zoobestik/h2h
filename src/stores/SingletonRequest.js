import { action, computed, observable } from 'mobx';
import { generateId } from 'app/lib';

export default class SingletonRequest {
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

    send(promise) {
        const id = this.createRequest();

        promise
            .then(this.processRequest(id, 'resolve'))
            .catch(this.processRequest(id, 'reject'));

        return this.defer.promise;
    }
}

export const create = fn => new SingletonRequest().createExecutor(fn);
