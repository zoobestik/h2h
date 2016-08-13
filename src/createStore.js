import * as stores from './stores';

export default (state = {}) => Object.keys(stores)
    .filter(name => name.substr(0, 2) !== '__')
    .reduce((services, name) => ({
        ...services,
        [name]: new stores[name](state[name]),
    }), {});
