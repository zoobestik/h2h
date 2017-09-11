import { Component } from 'react';
import Store from 'components/Pages/Index/store';
import Index from 'components/Pages/Index/component';

const routes = [
    {
        pattern: '/explore/scores/',
        data: {
            method: 'GET',
            action: 'scores',
            id: 'uefa_cl-2017',
        },
    },
    {
        pattern: '/explore',
        data: {
            method: 'GET',
            action: null,
            id: 'uefa_cl-2017',
        },
    },
];

export default class IndexWithStore extends Component {
    static store = Store;
    static routes = routes;

    render() {
        return <Index/>;
    }
}
