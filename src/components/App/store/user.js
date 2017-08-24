import { types } from 'mobx-state-tree';

export default types.model('User', {
    crc: types.string,
    uid: types.string,
    username: types.string,
}, {
    get displayLogin() {
        return this.username || `uid${this.uid}`;
    },
});
