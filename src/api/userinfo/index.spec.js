/* eslint-env mocha */
import api from './index';

describe('api', () => {
    describe('login()', done => {
        api.login()
            .then(() => {
                done();
            });
    });
});
