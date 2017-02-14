import { action, observable } from 'mobx';

const allowed = [];

const settable = (_, key) => {
    allowed.push(key);
};

export default class PageStore {
    @observable @settable crc = '';
    @observable @settable title = '';

    constructor(data) {
        this.merge(data);
    }

    @action merge = data => {
        Object.keys(data || {})
            .filter(key => allowed.indexOf(key) !== -1)
            .forEach(key => {
                this[key] = data[key];
            });

        return this;
    };

    _serialize() {
        return allowed.reduce((result, key) => {
            result[key] = this[key]; // eslint-disable-line no-param-reassign
            return result;
        }, {});
    }
}
