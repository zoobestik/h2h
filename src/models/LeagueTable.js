import { action, computed, observable } from 'mobx';

export default class LeagueTable {
    @observable items = [];

    constructor(leagueId) {
        this.getData(leagueId);
    }

    getData() {
        new Promise(resolve => {
            resolve([].concat(...new Array(5)).map((_, i) => ({
                id: i,
                name: `Team ${i}`,
                points: i * 100,
            })));
        })
            .then(data => this.updateData(data));
    }

    @action updateData(items) {
        this.items = items;
    }

    @computed get table() {
        return this.items;
    }
}
