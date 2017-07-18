import { observable } from 'mobx';
import Standings from 'components/IndexPage/stores/Standings';

export default class IndexPageStore {
    @observable standings = null;

    constructor(state) {
        const { standings } = state || {};
        this.standings = new Standings(standings);
    }

    valueOf() {
        return {
            standings: this.standings.valueOf(),
        };
    }
}
