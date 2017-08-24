import { Component } from 'react';
import { PropTypes, Provider, inject, observer } from 'mobx-react';
import Store from 'components/Pages/Index/store';
import Index from 'components/Pages/Index/component';

const stores2props = ({ store }) => ({ page: store.page });

class IndexSmart extends Component {
    static propTypes = {
        page: PropTypes.observableObject,
    };

    constructor(...args) {
        super(...args);
        this.store = Store.create({ id: 'uefa_cl-2017' });
    }

    componentWillMount() {
        this.props.page.replace(this.store);
    }

    render() {
        return (
            <Provider page={ this.store }>
                <Index/>
            </Provider>
        );
    }
}

export default inject(stores2props)(
    observer(IndexSmart)
);
