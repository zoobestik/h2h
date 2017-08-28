import { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer, Provider } from 'mobx-react';
import Store from 'components/Pages/Index/store';
import Index from 'components/Pages/Index/component';

const stores2props = ({ store }) => ({ setPage: store.page.replace });

class IndexSmart extends Component {
    static propTypes = {
        setPage: PropTypes.func,
    };

    constructor(...args) {
        super(...args);
        this.store = Store.create({ id: 'uefa_cl-2017' });
    }

    componentWillMount() {
        this.props.setPage(this.store);
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
