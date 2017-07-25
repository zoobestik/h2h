/* eslint-env jest */
import SingletonRequest, { create } from '../SingletonRequest';

describe('SingletonRequest', () => {
    describe('isProgress', () => {
        it('should be false on init', () => {
            const request = new SingletonRequest();
            expect(request.isProgress).toBe(false);
        });

        it('should be true in progress', () => {
            const request = new SingletonRequest();

            request.send(new Promise(() => {}));

            expect(request.isProgress).toBe(true);
        });

        it('should be true after complete', () => {
            const request = new SingletonRequest();
            return request.send(new Promise(r => r()))
                .then(() => expect(request.isProgress).toBe(true));
        });
    });

    describe('send', () => {
        it('should resolved by last request', async () => {
            let count = 0;
            const fn = result => expect(result).toBe(2);
            const request = new SingletonRequest();

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

    describe('create', () => {
        it('should resolved by last request', async () => {
            let count = 0;
            const fn = result => expect(result).toBe(2);
            const request = create(() => new Promise(revolve => revolve(count++)));

            const promises = [
                request().then(fn),
                request().then(fn),
                request().then(fn),
            ];

            return Promise.all(promises);
        });

        it('should be coorect params in fn', async () => {
            const request = create((o1, o2) => {
                expect(o1).toBe(1);
                expect(o2).toBe(2);
                return new Promise(() => {});
            });

            request(1, 2);
        });
    });
});
