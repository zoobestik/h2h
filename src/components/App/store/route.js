import { getEnv, types } from 'mobx-state-tree';
import { locationToRoute, typeRoutes } from 'components/Routes';

export default types.model('Route', {
    state: typeRoutes,
    loadingState: types.maybe(types.string),
})
    .actions(self => {
        const store = self;
        const { history } = getEnv(store);
        return {
            loading(value) {
                if (value === undefined) throw Error('For method failed value');

                const id = String(Date.now());
                store.loadingState = id;

                return id;
            },

            setState(state) {
                store.state = state;
                store.loadingState = null;
            },

            transitionTo: async (location, isReaction) => {
                let result;
                const id = store.loading(true);

                try {
                    const state = locationToRoute(location);
                    if (state.preload !== undefined) {
                        await state.preload();
                    }
                    result = state;
                } finally {
                    if (store.loadingState === id) {
                        if (result) {
                            store.setState(result);
                            if (!isReaction) history.push(location);
                        }
                        store.loading(false);
                    }
                }
            },

            changed(location, action) {
                if (action === 'PUSH') return;
                store.transitionTo(location.pathname, true);
            },

            afterAttach() {
                const location = history.location;
                store.changed(location);
                history.listen(store.changed);
            },
        };
    });
