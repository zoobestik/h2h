import { computed, observable, toJS } from 'mobx';

export default class PageStore {
    @observable documentTitle = '';
    main = null;

    constructor(state) {
        const { title, main } = state || {};
        if (title) this.documentTitle = title;
        if (main) this.main = main;
    }

    @computed get title() {
        return this.documentTitle;
    }

    set title(value) {
        this.documentTitle = value;
    }

    valueOf() {
        return {
            title: toJS(this.title),
            main: this.main && this.main.valueOf(),
        };
    }
}
