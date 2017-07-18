import { Component } from 'react';
import PropTypesReact from 'prop-types';
import { computed, toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import withRouter from 'react-router/withRouter';
import IndexPageStore from 'components/IndexPage/stores/IndexPage';
import Index from 'components/IndexPage/component';

const initialState = {
    standings: { id: 0 },
};

const stores2props = ({ page }) => ({ page });

class IndexSmart extends Component {
    static propTypes = {
        page: PropTypesReact.object,
        router: PropTypesReact.object.isRequired,
        children: PropTypesReact.node,
    };

    componentWillMount() {
        this.store = new IndexPageStore(this.props.page.main || initialState);
        if (!this.standings) this.store.standings.fetch();
    }

    componentWillUnmount() {
        this.store = null;
    }

    get store() {
        return this.props.page.main;
    }

    set store(value) {
        this.props.page.main = value;
    }

    @computed get standings() {
        return this.store.standings.table;
    }

    render() {
        const { router, children } = this.props;
        return (
            <Index url={ router.location.pathname } standings={ toJS(this.standings) }>{children}</Index>
        );
    }
}

export default withRouter(inject(stores2props)(observer(IndexSmart)));
