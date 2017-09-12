import susanin from 'susanin';
import { typesUnion } from 'app/lib/union';
import PageIndexView from 'components/Pages/Index';
import PageSignInView from 'components/Pages/SignIn';
import PageNoMatchView from 'components/Pages/NoMatch';

export const pages = {
    PageIndexView,
    PageSignInView,
    PageNoMatchView,
};

export const stores = Object.values(pages).map(({ store }) => store);
export const typeRoutes = typesUnion(...stores);

export const router = susanin();

Object.keys(pages).forEach(page => {
    pages[page].routes.forEach(route => {
        router.addRoute({
            ...route,
            data: {
                page,
                ...route.data,
            },
        });
    });
});

export const locationToRoute = location => {
    const [route] = router.findFirst(location) || [];
    const { page, ...params } = route ? route.getData() : {};
    const Store = (pages[page] || PageNoMatchView).store;
    return Store.create(params);
};
