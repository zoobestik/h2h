import { inject, observer, Provider } from 'mobx-react';
import { pages } from 'components/Routes';
import Routes from 'components/Routes/Root/component';

const stores2props = ({ store }) => ({
    pages,
    page: store.route.state,
});

export default inject(stores2props)(observer(props => (
    <Provider page={ props.page }>
        <Routes { ...props }/>
    </Provider>
)));
