import { observable, action, toJS } from 'mobx';
import { load } from 'app/api/league';
import SingletonRequest from 'app/stores/SingletonRequest';

export default class StandingsStore {
    id;
    request = null;

    @observable table = null;

    constructor(data) {
        this.id = data.id;
    }

    async fetch() {
        try {
            this.updateTable(await this.getRequest().send(load(this.id)));
        } finally {
            this.request = null;
        }
    }

    getRequest() {
        return this.request || (this.request = new SingletonRequest());
    }

    @action updateTable(data) {
        this.table = data;
    }

    valueOf() {
        return {
            id: this.id,
            standing: toJS(this.table),
        };
    }
}
