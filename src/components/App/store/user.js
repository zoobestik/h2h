import { types } from 'mobx-state-tree';

export default types.model('User', {
    crc: types.string,
    uid: types.string,
    username: types.string,
})
    .views(store => ({
        get displayLogin() {
            return store.username || `uid${store.uid}`;
        },
    }));
