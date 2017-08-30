import { types } from 'mobx-state-tree';
import PageIndexView from 'components/Pages/Index/store';
import PageSignInView from 'components/Pages/SignIn/store';
import PageNoMatchView from 'components/Pages/NoMatch/store';
import { typesUnion } from 'app/lib/union';

export default types.model('Page', {
    title: types.string,
    content: typesUnion(PageIndexView, PageSignInView, PageNoMatchView),
})
    .actions(store => ({
        replace: content => store.content = content, // eslint-disable-line no-return-assign, no-param-reassign
    }));
