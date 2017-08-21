import Link from 'react-router-dom/es/Link';
import { pubUrl } from 'app/lib';

export default () => (
    <div>
        No any pages. Go to <Link to={ pubUrl('/explore/') }>explore</Link>.
    </div>
);
