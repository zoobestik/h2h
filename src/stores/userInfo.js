import { transaction, computed, observable, toJS } from 'mobx';
import SingleTimeRequest from '../models/SingleTimeRequest';
import { login } from '../api/auth';

export default class UserInfoStore {
    @observable userInfo;
    singleAuthRequest = new SingleTimeRequest();

    constructor(data) {
        this.user = data;
    }

    authorize(...args) {
        return this.singleAuthRequest
            .send(login(...args))
                .then(data => (this.user = data));
    }

    get authRequest() {
        return this.singleAuthRequest;
    }

    get user() {
        return toJS(this.userInfo || {});
    }

    set user(data) {
        transaction(() => {
            const result = { ...(data || {}) };

            if (!result.login && result.uid) {
                result.login = `uid${result.uid}`;
            }

            this.userInfo = result;
        });
    }

    get(prop) {
        return computed(() => this.userInfo[prop]).get();
    }

    @computed get isAuth() {
        const uid = this.userInfo.uid;
        return Boolean(uid) || uid === 0;
    }
}
