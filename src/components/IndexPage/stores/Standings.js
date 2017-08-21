import { action, computed, observable, toJS } from 'mobx';
import { load } from 'app/api/league';
import ThrottleRequest from 'app/stores/ThrottleRequest';

export default class StandingsStore {
    @observable data = null;

    constructor(data) {
        this.id = data.id;
        this.request = new ThrottleRequest();
    }

    async fetch() {
        this.table = await this.request.send(load(this.id));
    }

    @computed
    get table() {
        return this.data;
    }

    @action
    set table(data) {
        return this.data = data;
    }

    valueOf() {
        return {
            id: this.id,
            standing: toJS(this.table),
        };
    }
}
