import { types } from 'mobx-state-tree';
import User from 'components/App/store/user';
import Route from 'components/App/store/route';

export default types.model('App', {
    title: types.string,
    route: Route,
    user: types.maybe(User),
})
    .actions(self => {
        const store = self;
        return ({
            setUser(data) {
                store.user = User.create(data);
            },
        });
    });
