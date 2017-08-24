import { types } from 'mobx-state-tree';
import PageIndexView from 'components/Pages/Index/store';
import PageSignInView from 'components/Pages/SignIn/store';
import { createMergeType, typesUnion } from 'app/lib/union';

export const PageView = createMergeType('PageView');

export default types.model('Page', {
    title: types.string,
    content: typesUnion(PageView, PageIndexView, PageSignInView),
})
    .actions(self => ({
        replace(state) {
            self.content = state; // eslint-disable-line no-param-reassign
        },
    }));
