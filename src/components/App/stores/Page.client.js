/* eslint-env browser */
import { computed } from 'mobx';
import PageStore from './Page.js'; // eslint-disable-line

export default class PageClientStore extends PageStore {
    @computed get title() { // eslint-disable-line class-methods-use-this
        return document.title;
    }

    set title(value) { // eslint-disable-line class-methods-use-this
        document.title = value;
    }
}
