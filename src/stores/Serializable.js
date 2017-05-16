import { action, extendObservable, observable, toJS } from 'mobx';

export default class Serializable {
    @observable data = {};

    constructor(data) {
        const props = this.constructorProps(data);
        Object.keys(props).forEach(key => this.set(key, props[key]));
    }

    constructorProps(data) { // eslint-disable-line class-methods-use-this
        return data || {};
    }

    get(prop) {
        return this.data[prop];
    }

    @action set(prop, value) {
        extendObservable(this.data, { [prop]: value });
    }

    valueOf() {
        return toJS(this.data);
    }
}
