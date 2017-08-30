import { Component } from 'react';
import Store from 'components/Pages/Index/store';
import Index from 'components/Pages/Index/component';

export default class IndexWithStore extends Component {
    static createStore() {
        return Store.create({ id: 'uefa_cl-2017' });
    }

    render() {
        return <Index/>;
    }
}
