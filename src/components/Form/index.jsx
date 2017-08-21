import { inject, observer } from 'mobx-react';
import Form from './component';

const stores2props = ({ auth }) => ({
    crc: auth.crc,
});

const FormSmart = props => <Form { ...props }/>;

export default inject(stores2props)(
    observer(FormSmart)
);
