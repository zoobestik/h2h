import { inject, observer } from 'mobx-react';
import Form from './component';

export default inject('page')(observer(({ page, ...props }) =>
    <Form crc={ page.crc } { ...props }/>
));
