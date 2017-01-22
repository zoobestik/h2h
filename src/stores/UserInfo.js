import { action, runInAction, computed, observable, toJS } from 'mobx';
import SingleTimeRequest from 'app/stores/SingleTimeRequest';
import { login } from 'app/api/auth';

export default class UserInfoStore {
    @observable userInfo;
    authRequest = new SingleTimeRequest();

    constructor(data) {
        this.user = data;

        this.resolveRequiest = this.resolveRequiest.bind(this);
    }

    authorize(...args) {
        return this.authRequest
            .send(login(...args))
                .then(this.resolveRequiest)
                .catch(() => this.authRequest.reset());
    }

    @action resolveRequiest(data) {
        this.user = data;
        this.authRequest.reset();
    }

    @computed get isProgress() {
        return this.authRequest.isProgress;
    }

    @computed get user() {
        return toJS(this.userInfo || {});
    }

    set user(data) {
        runInAction(() => {
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
