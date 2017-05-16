import { inject, observer } from 'mobx-react';
import Form from './component';

const stores2props = ({ auth }) => ({
    crc: auth.crc,
});

export default inject(stores2props)(observer(Form));
