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
        Object.keys(data || {}).forEach(key => {
            if (allowed.indexOf(key) !== -1) {
                this[key] = data[key];
            }
        });

        return this;
    }
}
