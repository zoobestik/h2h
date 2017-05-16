import { computed, toJS } from 'mobx';
import Serializable from './Serializable';

export default class UserStore extends Serializable {
    @computed get displayLogin() {
        return toJS(this.data.login) || `uid${this.data.uid}`;
    }
}
