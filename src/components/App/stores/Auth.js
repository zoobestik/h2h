import { action, computed, observable, toJS } from 'mobx';
import UserStore from 'app/stores/User';

const createUserStore = user => {
    if (!user) return null;
    if (user instanceof UserStore) return user;
    return new UserStore(user);
};

export default class AuthStore {
    @observable crc = '';
    @observable userInfo = null;

    constructor(data) {
        this.setData(data);
    }

    @action setData(params) {
        const data = params || {};

        this.crc = data.crc || '';
        this.user = data.user;

        return this;
    }

    @computed get isAuth() {
        return Boolean(this.userInfo);
    }

    @computed get user() {
        return this.userInfo;
    }

    set user(value) {
        this.userInfo = createUserStore(value);
    }

    valueOf() {
        return {
            crc: toJS(this.crc),
            user: this.user && this.user.valueOf(),
        };
    }
}
