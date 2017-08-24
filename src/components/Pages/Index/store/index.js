import { types } from 'mobx-state-tree';
import { createMergeType } from 'app/lib/union';
import { load } from 'app/api/league';

const StandingsItem = types.model('StandingsItem', {
    id: types.string,
    name: types.string,
    points: types.string,
});

export default createMergeType('PageViewStanding', {
    id: types.string,
    standings: types.maybe(types.array(StandingsItem)),
})
    .actions(self => {
        const store = self;
        let request = null;

        const fetchLeague = async () => {
            try {
                return await load(store.id);
            } finally {
                request = null;
            }
        };

        return ({
            fetch() {
                if (request === null) {
                    store.standings = null;
                    fetchLeague(store.id).then(this.setStandings, this.setStandingsError);
                }
                return this;
            },
            setStandings(data) { store.standings = data; },
            setStandingsError() {},

            afterCreate() { this.fetch(); },
        });
    });
