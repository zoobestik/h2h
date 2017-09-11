import { getEnv, types } from 'mobx-state-tree';
import { createMergeType } from 'app/lib/union';

const StandingsItem = types.model('StandingsItem', {
    id: types.string,
    name: types.string,
    points: types.string,
});

export default createMergeType('PageIndexView', {
    id: types.string,
    standings: types.maybe(types.array(StandingsItem)),
})
    .actions(self => {
        const store = self;
        return ({
            fetch() {
                const { league } = getEnv(store);
                league.load(store.id)
                    .then(store.setStandings, store.setStandingsError);
            },

            setStandings(data) {
                store.standings = data;
            },

            setStandingsError() {

            },

            afterAttach() {
                store.fetch();
            },
        });
    });
