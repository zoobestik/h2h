import { action, computed, observable, toJS } from 'mobx';
import { login } from 'app/api/auth';
import UserStore from 'app/stores/User';
import SingletonRequest from 'app/stores/SingletonRequest';

const getUser = user => {
    if (!user) return null;
    return user instanceof UserStore ? user : new UserStore(user);
};

export default class AuthStore {
    @observable crc = null;
    @observable userInfo = null;

    request = null;

    constructor(data) {
        this.setData(data);
        this.login = this.login.bind(this);
    }

    @action setData(data) {
        const { crc, user } = { ...(data || {}) };

        if (crc) this.crc = crc;
        this.user = user;

        return this;
    }

    getRequest() {
        return this.request || (this.request = new SingletonRequest());
    }

    async login(...args) {
        try {
            const data = await this.getRequest().send(login(...args));
            this.setData(data);
            return data;
        } finally {
            this.request = null;
        }
    }

    @computed get isAuth() {
        return Boolean(this.userInfo);
    }

    get isProgress() {
        return Boolean(this.request && this.request.isProgress);
    }

    @computed get user() {
        return this.userInfo;
    }

    set user(value) {
        this.userInfo = getUser(value);
    }

    valueOf() {
        return {
            crc: toJS(this.crc),
            user: this.user && this.user.valueOf(),
        };
    }
}
