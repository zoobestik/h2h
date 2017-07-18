import Link from 'react-router-dom/Link';
import { getPublicUrl } from 'app/lib';

export default () => (
    <div>
        No any pages. Go to <Link to={ getPublicUrl('/explore/') }>explore</Link>.
    </div>
);
