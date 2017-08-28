import { pubUrl } from 'app/lib';
import Link from 'react-router-dom/es/Link';

export default () => (
    <div>
        No any pages. Go to <Link to={ pubUrl('/explore/') }>explore</Link>.
    </div>
);
