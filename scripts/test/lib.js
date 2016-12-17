import proxyquire from 'proxyquire';

export const mockRequire = (path, modules) => {
    const result = proxyquire(path, modules);
    return result.default || result;
};

export const componentWithMocks = (path, modules) => {
    const result = {};

    Object.keys(modules).forEach(item => {
        const module = modules[item];
        result[item] = { default: module };
    });

    return mockRequire(path, result);
};
