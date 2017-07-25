import AuthStore from 'components/App/stores/Auth';
import PageStore from 'components/App/stores/Page';

export default class AppStore {
    constructor(data) {
        const state = data || {};
        this.auth = new AuthStore(state.auth);
        this.page = new PageStore(state.page);
    }

    valueOf() {
        return {
            auth: this.auth.valueOf(),
            page: this.page.valueOf(),
        };
    }
}
