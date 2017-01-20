import Link from 'react-router/lib/Link';
import { getPublicPath } from 'app/lib/paths';

export default () => (
    <div>
        No any pages. Go to <Link to={ getPublicPath('/explore/') }>explore</Link>.
    </div>
);
