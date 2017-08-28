import { types } from 'mobx-state-tree';
import PageIndexView from 'components/Pages/Index/store';
import PageSignInView from 'components/Pages/SignIn/store';
import PageNoMatchView from 'components/Pages/NoMatch/store';
import { typesUnion } from 'app/lib/union';

export default types.model('Page', {
    title: types.string,
    content: typesUnion(PageIndexView, PageSignInView, PageNoMatchView),
})
    .actions(self => ({
        replace(state) {
            self.content = state; // eslint-disable-line no-param-reassign
        },
    }));
