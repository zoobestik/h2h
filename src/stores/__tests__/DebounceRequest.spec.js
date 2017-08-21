/* eslint-env jest */
import DebounceRequest  from '../DebounceRequest';

describe('DebounceRequest', () => {
    describe('usage', () => {
        const first = { prop: 1 };
        const second = { prop: 2 };
        const action = () => {
            const result = {
                resolve: null,
                action: props => new Promise(r => {
                    result.resolve = () => r(props);
                }),
            };

            return result;
        };


        it('with many different requests', async () => {
            const resolved = [];
            const firstAction = action();
            const secondAction = action();
            const request = new DebounceRequest();

            expect(request.isProgress).toBe(false);

            const firstPromise = request.create(firstAction.action, first);
            firstPromise.then(a => resolved.push(a));
            expect(request.isProgress).toBe(true);

            const secondPromise = request.create(secondAction.action, second);
            secondPromise.then(a => resolved.push(a));
            expect(request.isProgress).toBe(true);

            firstAction.resolve();
            expect(request.isProgress).toBe(true);

            secondAction.resolve();
            expect(request.isProgress).toBe(true);

            await expect(firstPromise).resolves.toEqual(second);
            await expect(secondPromise).resolves.toEqual(second);
            expect(request.isProgress).toBe(false);
        });
    });

    //
    // describe('default', () => {
    //     it('should resolved by last request', async () => {
    //         let count = 0;
    //         const fn = result => expect(result).toBe(2);
    //         const request = new ThrottleRequest();
    //
    //         const promises = [
    //             request.send(new Promise(revolve => {
    //                 const result = count++;
    //                 setTimeout(() => revolve(result), 0);
    //             }).then(fn)),
    //             request.send(new Promise((revolve, reject) => reject(count++)).then(fn)),
    //             request.send(new Promise(revolve => revolve(count++))).then(fn),
    //         ];
    //
    //         return Promise.all(promises);
    //     });
    // });
    //
    // describe('create', () => {
    //     it('should resolved by last request', async () => {
    //         let count = 0;
    //         const fn = result => expect(result).toBe(2);
    //         const request = create(() => new Promise(revolve => revolve(count++)));
    //
    //         const promises = [
    //             request().then(fn),
    //             request().then(fn),
    //             request().then(fn),
    //         ];
    //
    //         return Promise.all(promises);
    //     });
    //
    //     it('should be coorect params in fn', async () => {
    //         const request = create((o1, o2) => {
    //             expect(o1).toBe(1);
    //             expect(o2).toBe(2);
    //             return new Promise(() => {});
    //         });
    //
    //         request(1, 2);
    //     });
    // });
});
