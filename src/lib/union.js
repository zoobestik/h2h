import { types } from 'mobx-state-tree';

export const createUnionType = (name, props, preprocess) => types.model(name, {
    key: types.literal(name),
    ...(props || {}),
})
    .preProcessSnapshot((...args) => {
        let passed = {};
        if (preprocess) passed = preprocess.apply(this, args);
        return { ...passed, key: name };
    });

export const createMergeType = (name, props) => {
    const Type = createUnionType(name, props, data => ({
        ...Type.propertiesNames.reduce((passed, key) => {
            passed[key] = data[key]; // eslint-disable-line no-param-reassign
            return passed;
        }, {}),
    }));
    return Type;
};

const typesUnionFirst = (name, pages) => {
    let index = -1;
    pages.some((type, i) => {
        if (type.name === name) {
            index = i;
            return true;
        }
        return false;
    });
    if (index === -1) return null;
    return pages[index];
};

export const typesUnion = (...pages) => types.union(snapshot => typesUnionFirst(snapshot.key, pages), ...pages);
