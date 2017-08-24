import { types } from 'mobx-state-tree';
import User from 'components/App/store/user';
import Page from 'components/App/store/page';

export default types.model('App', {
    user: types.maybe(User),
    page: Page,
})
    .actions(self => {
        const store = self;
        return ({
            setUser(data) {
                store.user = User.create(data);
            },
        });
    });
