import { inject, observer } from 'mobx-react';
import Form from './component';

const stores2props = ({ page }) => ({
    crc: page.crc,
});

export default inject(stores2props)(observer(Form));
