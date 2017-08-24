import { inject, observer } from 'mobx-react';
import Form from './component';

const stores2props = ({ store }) => ({
    crc: store.user ? store.user.crc : '',
});

const FormSmart = props => <Form { ...props }/>;

export default inject(stores2props)(
    observer(FormSmart)
);
