/* eslint-env mocha */
import { expect } from 'chai';
import SingleTimeRequest, { createExecutor } from '../SingleTimeRequest';

describe('SingleTimeRequest', () => {
    describe('isProgress', () => {
        it('should be false on init', () => {
            const request = new SingleTimeRequest();
            expect(request.isProgress).to.equal(false);
        });

        it('should be true in progress', () => {
            const request = new SingleTimeRequest();

            request.send(new Promise(() => {}));

            expect(request.isProgress).to.equal(true);
        });

        it('should be false after complete', () => {
            const request = new SingleTimeRequest();
            return request.send(new Promise(r => r()))
                .then(() => expect(request.isProgress).to.equal(false));
        });
    });

    describe('send', () => {
        it('should resolved by last request', async () => {
            let count = 0;
            const fn = result => expect(result).to.equal(2);
            const request = new SingleTimeRequest();

            const promises = [
                request.send(new Promise(revolve => {
                    const result = count++;
                    setTimeout(() => revolve(result), 0);
                }).then(fn)),
                request.send(new Promise((revolve, reject) => reject(count++)).then(fn)),
                request.send(new Promise(revolve => revolve(count++))).then(fn),
            ];

            return Promise.all(promises);
        });
    });

    describe('createExecutor', () => {
        it('should resolved by last request', async () => {
            let count = 0;
            const fn = result => expect(result).to.equal(2);
            const request = createExecutor(() => new Promise(revolve => revolve(count++)));

            const promises = [
                request().then(fn),
                request().then(fn),
                request().then(fn),
            ];

            return Promise.all(promises);
        });

        it('should be coorect params in fn', async () => {
            const request = createExecutor((o1, o2) => {
                expect(o1).to.equal(1);
                expect(o2).to.equal(2);
                return new Promise(() => {});
            });

            request(1, 2);
        });
    });
});
